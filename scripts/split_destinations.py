from pathlib import Path
import re

root = Path(r"g:\meegin tours and travels")
source = root / "src/data/destinations.ts"
text = source.read_text(encoding="utf-8")

section_pattern = re.compile(
    r"// ============================================================================\n// ([A-Z0-9 /-]+)\n// ============================================================================\n(.*?)(?=\n// ============================================================================\n// [A-Z0-9 /-]+\n// ============================================================================|\Z)",
    re.S,
)

ordered_names = [
    "pokhara",
    "mustang",
    "chitwan",
    "lumbini",
    "palpa",
    "baglung",
    "kathmandu",
    "bandipur",
    "ghandruk",
    "annapurna",
    "everest",
]

base_dir = root / "src/data/destinations"
base_dir.mkdir(parents=True, exist_ok=True)

written = []
for title, body in section_pattern.findall(text):
    cleaned = body.strip()
    if not cleaned:
        continue

    match = re.search(r"export const\s+(?P<name>[A-Za-z0-9_]+):\s*Destination\s*=\s*\{", cleaned)
    if not match:
        continue

    name = match.group("name").lower()
    if name not in ordered_names:
        continue

    folder = base_dir / name
    folder.mkdir(parents=True, exist_ok=True)
    file_path = folder / f"{name}.ts"
    file_path.write_text(
        'import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";\n\n'
        + cleaned
        + "\n",
        encoding="utf-8",
    )
    written.append(name)

# Rebuild the index file with a stable import/export structure.
final_names = [name for name in ordered_names if name in written]
imports = [f'import {{ {name} }} from "./destinations/{name}/{name}";' for name in final_names]
export_list = ", ".join(final_names)

index = f'''import type {{ Destination, Place }} from "@/types";
{chr(10).join(imports)}

export {{ {export_list} }};

export const destinations: Destination[] = [{export_list}];

export function getDestinationBySlug(slug: string): Destination | undefined {{
  return destinations.find((destination) => destination.slug === slug);
}}

export function getPlaceBySlug(
  destinationSlug: string,
  placeSlug: string
): Place | undefined {{
  const destination = getDestinationBySlug(destinationSlug);
  return destination?.places.find((place) => place.slug === placeSlug);
}}

export function getFeaturedDestinations(): Destination[] {{
  return destinations.filter((destination) => destination.featured);
}}

export function getDestinationsByRegion(region: string): Destination[] {{
  return destinations.filter((destination) => destination.region === region);
}}
'''

source.write_text(index, encoding="utf-8")
print(f"Created {len(final_names)} destination modules in {base_dir}")
