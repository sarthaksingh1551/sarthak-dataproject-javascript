from collections import defaultdict
import json
import csv


def regs_per_principal_business_activity(activity_list):
    ''' Registrations / Principal Business Activity '''

    registration_details = defaultdict(int)

    for activities in activity_list:
        registration_details[activities] += 1

    registration_details = {k: v for k, v in sorted(registration_details.items())}

    write_json(registration_details)


def write_json(registration_details,
               filename="json_data/3regs_per_principal_business_activity.json"):
    with open(filename, "w") as f:
        json.dump(registration_details, f, indent=4)


if __name__ == "__main__":
    with open('data.CSV', encoding='utf8', errors='ignore') as data:
        data_frame = csv.reader(data, delimiter=',')

        activity_list = []

        next(data_frame)
        for _ in data_frame:
            date_of_reg_column = _[6]
            year = date_of_reg_column[6:]

            if year == '2015':
                activities_column = _[11]
                activity_list.append(activities_column)

    regs_per_principal_business_activity(activity_list)
