# Image System

MEegin Tours requires a strictly local manual image deployment strategy. **No images are fetched randomly from online URLs or generated automatically by code.**

## Core Rules
1. All images are hosted in `public/images/`.
2. UI components reference strings specifying these exact paths (e.g., `"/images/destinations/pokhara/hero.jpg"`).
3. The project owner manually sources and places physical `.jpg`, `.png`, or `.webp` files into these locations.

## Preferred Directory tree
```
public/
└── images/
    └── destinations/
        ├── pokhara/
        ├── mustang/
        ├── chitwan/
        ├── lumbini/
        ├── palpa/
        ├── baglung/
        ├── kathmandu/
        ├── bandipur/
        ├── ghandruk/
        ├── annapurna/
        └── everest/
```

## Utility Validation
The system uses a utility (e.g., `isValidImageSrc(src)`) to conditionally render colored placeholders if an image path is declared but the physical image hasn't been provided yet. This prevents ugly broken-image icons from ruining the UI.

## Adding new images workflow
If a new image is required by the developer/system:
1. The system creates the data entry referencing the desired path: `image: "/images/destinations/mustang/temple.jpg"`.
2. The developer informs the owner:
   - **IMAGE REQUIRED:** Mustang Temple highlight
   - **EXPECTED PATH:** `public/images/destinations/mustang/temple.jpg`
3. The owner manually drops the file into `public/images/destinations/mustang/temple.jpg`.
4. The frontend automatically picks it up and renders it.

## Known Broken / Missing Links Analysis
A comprehensive physical inspection of the `public/` directory against `src/data` is required continually. Current system relies heavily on placeholders where images are missing.
