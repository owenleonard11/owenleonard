# tested on python 3.9, 3.10

from json import load

TEX_HEAD = '\\documentclass[a4paper,10pt]{article}\n'
TEX_PACKAGES = [
    ('fontawesome', ''),
    ('inputenc', 'utf8'),
    ('fontenc', 'T1'),
    ('lmodern', ''),
    ('geometry', 'left=1cm, right=1cm, top=1.5cm, bottom=1cm'),
    ('hyperref', 'colorlinks=true, urlcolor=blue'),
    ('parskip', ''),
    ('titlesec', ''),
    ('xcolor', 'dvipsnames')
]  
TEX_SPACING = '\\titlespacing{\\section}{0pt}{\\parskip}{1\\parskip}\n\n'

def stz(text: str):
    return text.replace('&', '\\&')

with open('src/lib/text/cv.json') as cv_json:
    cv = load(cv_json)

with open('src/lib/text/cv.tex', 'w') as tex:
    tex.write(TEX_HEAD)
    for package, options in TEX_PACKAGES:
        tex.write(f'\\usepackage[{options}]{{' + package + '}\n')
    tex.write(TEX_SPACING)
    tex.write('\\begin{document}\n')

    # Name & Contact Info
    tex.write('{\\LARGE \\textbf{Owen Leonard}} \\\\[0.2cm]\n')
    tex.write('\\noindent\n')
    tex.write('\\faEnvelope \\hspace{0.2cm} \\href{mailto:owenleonard@ucsb.edu}{owenleonard@ucsb.edu} \\\\\n')
    tex.write('\\faLink \\hspace{0.2cm} \\href{https://owenleonard.dev/}{owenleonard.dev} \\\\\n')
    tex.write('\\faGithub \\hspace{0.2cm} \\href{https://github.com/owenleonard11}{github.com/owenleonard11}\n\n')

    for section in cv['sections']:
        tex.write('\\section*{' + stz(section['title']) + '}\n\n')
        for entry in section['entries']:
            tex.write('\\textbf{' + stz(entry['left']) + '} ' if entry['bold'] == 'left' else stz(entry['left']) + ' ')
            if entry['alt']:
                tex.write('\\hspace{0.2cm} \\textcolor{darkgray}{\\textit{' + stz(entry["alt"]) + '}} ')
            tex.write('\\hfill ')
            tex.write('textbf{' + stz(entry['right']) + ' }' if entry['bold'] == 'right' else stz(entry['right']) + ' ')
            tex.write('\n\n')
        tex.write('\n')
            
    tex.write('\\end{document}')