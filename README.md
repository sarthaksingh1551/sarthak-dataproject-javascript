# Python Dataproject
# Company Master :: Maharashtra

TODO : To convert raw data into JSON files and plot graphs using JavaScript on browser.

## Prerequisites
Clone the repository from gitlab to your local machine.
```console
$ git clone https://gitlab.com/mountblue/cohort-16-python/sarthak_singh1551/dataproject-javascript.git
```

## Run the Project
1. Navigate to the project directory.
2. Make sure that the json_data folder is empty, so that there is no chance of file duplication.
3. One by one run python files to generate all 4 JSON files-

```console
$ python3 1authorized_cap.py
$ python3 2company_reg_by_year.py
$ python3 3regs_per_principal_business_activity.py
$ python3 4regs_per_principal_business_activity_for_4yrs.py
```

4. Start python server
```console
$ python3 -m http.server
```

5. Go to the browser and paste the link
```
http://0.0.0.0:8000/graphs.html
```

> Problem 1 - Histogram of Authorized Cap

> Problem 2 - Bar Plot of company registration by year

> Problem 3 - Bar Plot of Registrations per Principal Business Activity

> Problem 4 - Bar Plot of Number of Registration per Principle Business Activity for any 4 years