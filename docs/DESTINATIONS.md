# Destinations Architecture

Destinations are the primary content pillar of the MEegin Tours website. 

## Hierarchy
The system uses a nested content mapping:
`Destination` -> `Place` -> `Tours`

1. **Destination:** A broad region or city (e.g., Pokhara, Kathmandu).
2. **Places:** Specific identifiable points of interest inside the destination (e.g., Phewa Lake in Pokhara; Swayambhunath in Kathmandu).
3. **Tours / Booking:** Actual products sold by MEegin that span these destinations.

## Universal Layout Contract
Every destination must implement the exact same narrative structure to maintain visual scalability. 
The components expecting this are primarily `DestinationPage` and its children:
1. **Hero Banner:** Full bleed image, Region subtitle, Title, short CTA.
2. **Introduction:** Formatted text block with "known for" metadata and introductory image.
3. **Featured Places (Attractions):** Card grid showing `Place` entities belonging to this `Destination`.
4. **Tours:** Horizontal list/grid of `Tour` products taking place in this destination.
5. **Experiences:** Icon-grid showing things to do (Boating, Hiking, etc).
6. **Travel Tips & Seasons:** When to go and how to prepare.
7. **FAQ:** Accordion style question/answers.
8. **Final CTA:** Full width block pushing toward contact/booking.

## Supported Destinations Blueprint
The system currently tracks configurations for:
- Pokhara
- Mustang
- Chitwan
- Lumbini
- Palpa
- Baglung
- Kathmandu
- Bandipur
- Ghandruk
- Annapurna
- Everest

## Consolidation Requirement
Because some of these were originally built as hardcoded React pages (`app/destinations/pokhara/page.tsx`), they must be dissolved entirely into `src/data/destinations/pokhara/pokhara.ts`. No destination should have its own hardcoded React file.
