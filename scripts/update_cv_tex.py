from json import load

def brk(text: str):
    return f'{{{text}}}'

def esc(text: str):
    return text.replace('&', '\\&')

with open('src/lib/text/cv_text.json') as cv_json:
    cv = load(cv_json)

with open('src/lib/text/cv_base.tex', 'a') as tex:
    for section in cv['sections']:
        tex.write(f'\t\\cvsection{brk(esc(section["title"]))}\n')
        for entry in section['entries']:
            if 'date' not in entry:
                print(entry)
            date = brk(esc(entry['date']))
            bold = brk(esc(entry['bold']))
            norm = esc(entry['norm']) if 'norm' in entry else ''
            undr = brk(esc(entry['undr'])) if 'undr' in entry else ''
            href = brk(entry["href"]) if 'href' in entry else ''
            if 'href' in entry:
                text = brk(f'\\textbf{bold}{norm} \\faExternalLink')
                top_line = brk(f'\\href{href}{text}')
            else:
                top_line = brk(f'\\textbf{bold}{norm}')
            tex.write(f'\t\t\\{"double" if undr else "single"}entry{date}{top_line}{undr}\n')
        tex.write('\n\t\\vspace{0.5cm}\n')
    tex.write('\\end{document}')
