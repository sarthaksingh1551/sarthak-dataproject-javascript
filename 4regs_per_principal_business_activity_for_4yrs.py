from collections import defaultdict
import json
import csv


def group_bar_plot(data_frame):
    ''' No of Registration / Principle Business Activity for 4yrs '''

    result_dict = defaultdict(dict)

    for rows in data_frame:
        activity = rows[11]
        date_of_reg = rows[6]

        if date_of_reg[6:] == '2016':
            result_dict['2016'][activity] = result_dict['2016'].get(
                activity, 0) + 1
        if date_of_reg[6:] == '2017':
            result_dict['2017'][activity] = result_dict['2017'].get(
                activity, 0) + 1
        if date_of_reg[6:] == '2018':
            result_dict['2018'][activity] = result_dict['2018'].get(
                activity, 0) + 1
        if date_of_reg[6:] == '2019':
            result_dict['2019'][activity] = result_dict['2019'].get(
                activity, 0) + 1

    result_of_four_years = {}

    for year, activities in result_dict.items():
        activity_and_frequency = list(result_dict[year].items())[:5]
        result_of_four_years[year] = list(dict(activity_and_frequency).values())
    
    print(result_of_four_years)

    write_json(result_of_four_years)


def write_json(result_of_four_years,
               filename="json_data/4regs_per_principal_business_activity_for_4yrs.json"):
    with open(filename, "w") as f:
        json.dump(result_of_four_years, f, indent=4)


if __name__ == '__main__':
    with open('data.CSV', encoding='utf8', errors='ignore') as file:

        data_frame = csv.reader(file)
        next(data_frame)

        group_bar_plot(data_frame)
