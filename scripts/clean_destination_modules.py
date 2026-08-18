from pathlib import Path
import re

root = Path(r"g:\meegin tours and travels\src\data\destinations")
for folder in root.iterdir():
    if not folder.is_dir():
        continue
    for file_path in folder.glob("*.ts"):
        text = file_path.read_text(encoding="utf-8")
        match = re.search(r"export const\s+destinations\s*:\s*Destination\s*\[\]\s*=\s*\[.*?\];\s*\n?", text, re.S)
        if match:
            text = text[:match.start()].rstrip() + "\n"
            file_path.write_text(text, encoding="utf-8")
            print(f"Removed aggregate block from {file_path}")
