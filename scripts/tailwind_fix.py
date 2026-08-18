from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent / "src"
patterns = {
    r"rounded-\[2rem\]": "rounded-4xl",
    r"rounded-t-\[2rem\]": "rounded-t-4xl",
    r"bg-black/\[\.06\]": "bg-black/6",
    r"dark:bg-white/\[\.08\]": "dark:bg-white/8",
    r"h-\[14px\]": "h-3.5",
    r"border-black/\[\.08\]": "border-black/8",
    r"hover:bg-black/\[\.04\]": "hover:bg-black/4",
    r"h-\[280px\]": "h-70",
    r"rounded-\[1\.75rem\]": "rounded-3xl",
    r"bg-\[radial-gradient\(circle_at_top_left,_rgba\(0,145,218,0\.25\),_transparent_35%\),radial-gradient\(circle_at_bottom_right,_rgba\(33,151,54,0\.18\),_transparent_30%\)\]": "hero-radial-overlay",
    r"bg-\[radial-gradient\(circle_at_top,_rgba\(255,255,255,0\.14\),transparent_55%\)\]": "hero-image-top-glow",
}

for path in root.rglob("*.tsx"):
    text = path.read_text(encoding="utf-8")
    new_text = text
    for pat, rep in patterns.items():
        new_text = re.sub(pat, rep, new_text)
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        print("updated", path)
