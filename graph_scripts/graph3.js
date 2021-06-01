function regsPerPrincipalBusinessActivity() {
    var frequency = [];
    var cat = []
    fetch("json_data/3regs_per_principal_business_activity.json")
        .then((response) => response.json())
        .then((data) => {
            for (i = 1; i <= 15; i++) {
                cat = Object.keys(data);
                frequency = Object.values(data);
            }
            console.log(frequency)
            console.log(cat)

            Highcharts.chart("container", {
                chart: {
                    type: "column",
                },
                title: {
                    text: "Number of Registrations per Principal Business Activity"
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
                        name: "Principal Business Activity",
                        data: frequency,
                    },
                ],
            });
        });
}
