# kod.py  —  DÜZƏLDİLMİŞ VERSİYA

import pandas as pd
import re
import json

FILE_PATH = "data.xlsx"          # fayl adını özünə uyğun dəyiş

df = pd.read_excel(FILE_PATH, sheet_name="Sheet1", header=None)

# Qruplar
groups = [
    {"name": "1-ci qrup", "col": 0},
    {"name": "2-ci qrup", "col": 2},
    {"name": "3-cü qrup", "col": 4},
    {"name": "4-cü qrup", "col": 6},
]

all_data = []
last_known_university = None   # ← ƏSAS DƏYİŞİKLİK buradadır

for row_idx in range(len(df)):
    row = df.iloc[row_idx]

    # 1. Universitet adı axtar (əsasən 1-ci sütunda olur)
    uni_cell = str(row[0]).strip() if pd.notna(row[0]) else ""
    if any(word in uni_cell for word in ["Universiteti", "Akademiyası", "Məktəbi", "İnstitutu"]):
        last_known_university = uni_cell
        continue

    # 2. Reklam / turkiyede tehsil keç
    if "Reklam" in uni_cell or "turkiyede tehsil" in uni_cell.lower():
        continue

    # 3. Hər qrup sütununu yoxla
    for group in groups:
        col = group["col"]
        cell = str(row[col]).strip() if pd.notna(row[col]) else ""
        if not cell:
            continue

        # ▶ ilə başlayan ixtisas
        if re.search(r'^[♦@ ]*▶', cell):
            full_line = cell

            # major çıxar
            major_match = re.match(r'^[♦@ ]*▶\s*(.+?)(?:\s*[ƏQ]\s*[\d.-]+\s*\(?.*)?$', full_line)
            major = major_match.group(1).strip() if major_match else full_line.replace("▶", "").strip()

            # bal(lar)
            budget = None
            paid = None
            score_match = re.search(r'([ƏQ])\s*([\d.]+)\s*\(?\s*([\d.-]+)?\s*\)?', full_line)
            if score_match:
                _, b_str, p_str = score_match.groups()
                try: budget = float(b_str) if b_str != '-' else None
                except: budget = None
                try: paid = float(p_str) if p_str and p_str != '-' else None
                except: paid = None

            # dil
            language = ""
            lower_line = full_line.lower()
            if "ingilis dilində" in lower_line or "ingilis dilinde" in lower_line:
                language = "ingilis"
            elif "türk dilində" in lower_line or "türk dilinde" in lower_line:
                language = "türk"

            # növbəti sətirdə dil ola bilər
            if row_idx + 1 < len(df):
                next_cell = str(df.iloc[row_idx + 1, col]).strip().lower()
                if "dilində" in next_cell or "dilinde" in next_cell:
                    if "ingilis" in next_cell:
                        language = "ingilis"
                    elif "türk" in next_cell:
                        language = "türk"

            # yalnız universitet varsa əlavə et
            if last_known_university and major:
                all_data.append({
                    "group": group["name"],
                    "university": last_known_university,
                    "major": major,
                    "language": language,
                    "budget_score": budget,
                    "paid_score": paid
                })

# Fayla yaz
with open("data.js", "w", encoding="utf-8") as f:
    f.write("export const universityData = ")
    json.dump(all_data, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Toplam {len(all_data)} ixtisas yazıldı.")
print("data.js hazırdır.")