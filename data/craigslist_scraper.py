import sys
from bs4 import BeautifulSoup as bs
from requests import get
import json

search_url = 'https://losangeles.craigslist.org/search/{}?hasPic=1'
image_url = 'https://images.craigslist.org/{}_300x300.jpg'

forsale_slugs = {
    'ata' : 'antiques',
    'ppa' : 'appliances',
    'pta' : 'auto-parts',
    'bia' : 'bikes',
    'cba' : 'collectibles',
    'ela' : 'electronics',
    'foa' : 'general'
}

forsale_results = []
index = 0
for key, value in forsale_slugs.items():
    print(key, '->', value)
    search = search_url.format(key)
    print(search)

    response = get(search)

    # get posts
    html_soup = bs(response.text, 'html.parser')
    posts = html_soup.find_all('li', class_='result-row')

    # get pics
    soup = bs(response.content, 'lxml')
    ids = [item['data-ids'].replace('1:','') for item in soup.select('.result-image[data-ids]')]
    images = [image_url.format(j) for i in ids for j in i.split(',')]

    for i in range(1, 101):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'for-sale',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': float(posts[i].a.text.strip().replace('$', '')),
            'images': images[i]
        }
        forsale_results.append(cur)
    index+=100


with open('forsale.js', 'w') as f:
    f.write('module.exports = ')
    json.dump(forsale_results, f)
