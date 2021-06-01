function companyRegByYear() {
    var frequency = [];
    var cat = []
    fetch("json_data/2company_reg_by_year.json")
        .then((response) => response.json())
        .then((data) => {
            // i will start from 1900, as values before 1900 are not 
            // continuous. This will result in 'undefined' in frequency
            for (i = 1900; i <= 2020; i++) {
                frequency.push(data[i]);
                cat.push(i);
            }
            console.log(frequency)
            console.log(cat)

            Highcharts.chart("container", {
                chart: {
                    type: "column",
                },
                title: {
                    text: "Bar Plot of Company Registration by Year"
                },
                xAxis: {
                    type: "category",
                    categories: cat
                },
                yAxis: {
                    title: {
                        text: "Registrations",
                    }
                },
                tooltip: {
                    headerFormat:
                        '<span style="font-size:10px">For: {point.key}</span><table>',
                    pointFormat:
                        '<tr><td style="color:{series.color};padding:0">Registrations: </td>' +
                        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
                    footerFormat: "</table>",
                    shared: true,
                    useHTML: true,
                },
                series: [
                    {
                        name: "Years",
                        data: frequency,
                    },
                ],
            });
        });
}
