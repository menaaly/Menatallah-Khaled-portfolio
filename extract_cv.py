from pathlib import Path
import pypdf

pdf = Path(r"Menatallah Khaled_CV.pdf")
print('exists:', pdf.exists(), 'size:', pdf.stat().st_size if pdf.exists() else 0)
reader = pypdf.PdfReader(str(pdf))
print('pages:', len(reader.pages))
for i, page in enumerate(reader.pages, 1):
    print(f'--- PAGE {i} ---')
    txt = page.extract_text() or ''
    print(txt[:5000])
