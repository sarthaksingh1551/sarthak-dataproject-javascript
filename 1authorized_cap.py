import csv
import json
from collections import defaultdict


def authorized_cap(authorized_cap_list):
    ''' Authorized Cap '''

    dictionary = defaultdict(int)

    for val in authorized_cap_list:
        if val <= 100000:
            dictionary['1'] += 1
        elif 100000 < val <= 1000000:
            dictionary['2'] += 1
        elif 1000000 < val <= 10000000:
            dictionary['3'] += 1
        elif 10000000 < val <= 100000000:
            dictionary['4'] += 1
        elif val > 100000000:
            dictionary['5'] += 1

    write_json(dictionary)


def write_json(dictionary, filename="json_data/1authorized_cap.json"):
    with open(filename, "w") as f:
        json.dump(dictionary, f, indent=4)


if __name__ == '__main__':
    with open('data.CSV',
              encoding='utf8',
              errors='ignore') as data:
        data_frame = csv.reader(data, delimiter=',')
        next(data_frame)

        authorized_cap_list = []

        for elements in data_frame:
            authorized_cap_list.append(float(elements[8]))

        authorized_cap(authorized_cap_list)
