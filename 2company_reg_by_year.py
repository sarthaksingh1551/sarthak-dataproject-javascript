from collections import defaultdict
import json
import csv


def company_reg(only_year):
    ''' Company Registration by Year '''

    number_of_company_regs = defaultdict(int)

    for elements in only_year:
        number_of_company_regs[elements] += 1

    # Sort number_of_company_regs dictionary by keys
    number_of_company_regs = {k: v for k,
                              v in sorted(number_of_company_regs.items())}

    write_json(number_of_company_regs)


def write_json(number_of_company_regs,
               filename="json_data/2company_reg_by_year.json"):
    with open(filename, "w") as f:
        json.dump(number_of_company_regs, f, indent=4)


if __name__ == '__main__':
    with open('data.CSV', encoding='utf8', errors='ignore') as data:
        data_frame = csv.reader(data, delimiter=',')

        registration_year = []  # including 'NA'
        only_year = []  # excluding 'NA'

        next(data_frame)
        for _ in data_frame:
            date_of_reg_column = _[6]
            registration_year.append(date_of_reg_column[6:])

        for years in registration_year:
            if len(years) == 4:  # remove empty strings ''
                only_year.append(years)

        company_reg(only_year)
