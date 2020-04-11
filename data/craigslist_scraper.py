import sys
from bs4 import BeautifulSoup as bs
from requests import get
import json

search_url = 'https://losangeles.craigslist.org/search/{}?hasPic=1'
search_url_nopics = 'https://losangeles.craigslist.org/search/{}'
image_url = 'https://images.craigslist.org/{}_600x450.jpg'

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

    # get dates
    dates = [item['title'] for item in soup.select('.result-date')]

    for i in range(1, 26):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'for-sale',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': float(posts[i].a.text.strip().replace('$', '')),
            'images': images[i],
            'uploaded': dates[i],
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        forsale_results.append(cur)
    index+=25


##################################################################################################


housing_slugs = {
    'apa' : 'apts-or-housing',
    'swp' : 'housing-swap',
    'hsw' : 'housing-wanted',
    'off' : 'office-or-commercial',
    'prk' : 'parking-or-storage',
    'rea' : 'real-estate-for-sale',
    'roo' : 'rooms-or-shared',
    'sha' : 'rooms-wanted'
}

housing_results = []
for key, value in housing_slugs.items():
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

    # get dates
    dates = [item['title'] for item in soup.select('.result-date')]

    for i in range(1, 26):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'housing',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': float(posts[i].a.text.strip().replace('$', '')),
            'images': images[i],
            'uploaded': dates[i],
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        housing_results.append(cur)
    index+=25




######################################################################################

community_slugs = {
    'act' : 'activities',
    'ats' : 'artists',
    'kid' : 'childcare',
    'cls' : 'classes',
    'eve' : 'events',
    'com' : 'general',
    'grp' : 'groups',
    'vnn' : 'local-news'
}

community_results = []
for key, value in community_slugs.items():
    print(key, '->', value)
    search = search_url_nopics.format(key)
    print(search)

    response = get(search)

    # get posts
    html_soup = bs(response.text, 'html.parser')
    posts = html_soup.find_all('li', class_='result-row')

    # get dates
    dates = [item['title'] for item in soup.select('.result-date')]

    for i in range(1, 26):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'community',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': '',
            'images': '',
            'uploaded': dates[i],
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        community_results.append(cur)
    index+=25


######################################################################################

jobs_slugs = {
    'acc' : 'finance',
    'ofc' : 'admin-or-office',
    'egr' : 'arch-or-engineering',
    'med' : 'art-or-media-or-design',
    'sci' : 'biotech-or-science',
    'bus' : 'business-or-mgmt',
    'csr' : 'customer-service',
    'edu' : 'education'
}

jobs_results = []
for key, value in jobs_slugs.items():
    print(key, '->', value)
    search = search_url_nopics.format(key)
    print(search)

    response = get(search)

    # get posts
    html_soup = bs(response.text, 'html.parser')
    posts = html_soup.find_all('li', class_='result-row')

    # get dates
    dates = [item['title'] for item in soup.select('.result-date')]

    for i in range(1, 26):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'jobs',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': '',
            'images': '',
            'uploaded': dates[i],
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        jobs_results.append(cur)
    index+=25



######################################################################################

services_slugs = {
    'aos' : 'automotive',
    'bts' : 'beauty',
    'cms' : 'cell-or-mobile',
    'cps' : 'computer',
    'crs' : 'creative',
    'cys' : 'cycle',
    'evs' : 'event',
    'fgs' : 'farm-and-garden'
}

services_results = []
for key, value in services_slugs.items():
    print(key, '->', value)
    search = search_url_nopics.format(key)
    print(search)

    response = get(search)

    # get posts
    html_soup = bs(response.text, 'html.parser')
    posts = html_soup.find_all('li', class_='result-row')

    # get dates
    dates = [item['title'] for item in soup.select('.result-date')]

    for i in range(1, 26):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'services',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': '',
            'images': '',
            'uploaded': dates[i],
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        services_results.append(cur)
    index+=25


######################################################################################

gigs_slugs = {
    'cpg' : 'computer',
    'crg' : 'creative',
    'cwg' : 'crew',
    'dmg' : 'domestic',
    'evg' : 'event',
    'lbg' : 'labor',
    'tlg' : 'talent',
    'wrg' : 'writing'
}

gigs_results = []
for key, value in gigs_slugs.items():
    print(key, '->', value)
    search = search_url_nopics.format(key)
    print(search)

    response = get(search)

    # get posts
    html_soup = bs(response.text, 'html.parser')
    posts = html_soup.find_all('li', class_='result-row')

    # get dates
    dates = [item['title'] for item in soup.select('.result-date')]

    for i in range(1, 26):
        cur = {
            'id': index + i,
            'city': 'la',
            'category': 'gigs',
            'listing': value,
            'title': posts[i].find('a', class_='result-title hdrlnk').text,
            'price': '',
            'images': '',
            'uploaded': dates[i],
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        gigs_results.append(cur)
    index+=25



##########################################################################################


results = forsale_results + housing_results + community_results + jobs_results + services_results + gigs_results

with open('new.js', 'w') as f:
    f.write('module.exports = ')
    json.dump(results, f)
    f.close()
