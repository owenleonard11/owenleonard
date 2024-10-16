# tested on python 3.9, 3.10

from os.path import dirname, join
from json import dump
json = {
    'sections': []
}

with open('cv.json') as md:
    id = 0
    for line in md:
        if line[0] == '#':
            if line[1] == '#':
                content = line.split('##')[1].strip()
                if '|' in content:
                    subtitle, alt = content.split('|')
                else:
                    subtitle, alt = content, ''
                json['sections'][-1]['entries'].append({
                    'uid'  : id,
                    'left' : subtitle.strip(),
                    'right': '',
                    'alt'  : alt.strip(),
                    'bold' : 'left',
                    'side' : ''
                })
                id += 1
            else:
                title = line.split('#')[1].strip()
                json['sections'].append({
                    'title': title,
                    'entries': []
                })
        elif line[0] == '-':
            content = line[2:].strip()
            name, alt, date, desc = content.split('|')
            json['sections'][-1]['entries'].append({
                'uid'  : id,
                'left' : name.strip(),
                'right': date.strip(),
                'alt'  : alt.strip(),
                'bold' : '',
                'side' : desc.strip()
            })
            id += 1
        else:
            raise ValueError(f'Unexpected line start character: {line[0]}')

with open('cv.json') as json_file:
    dump(json, json_file, indent=2, separators=(',',': '))
