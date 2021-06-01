function regsPerPrincipalBusinessActivity4Yrs() {
    fetch("json_data/4regs_per_principal_business_activity_for_4yrs.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            Highcharts.chart("container", {
                chart: {
                    type: "column",
                },
                title: {
                    text: "Group PlotNo of Registration per Principle Business Activity for 4yrs"
                },
                xAxis: {
                    type: "category",
                    categories: [
                        "Agriculture & allied",
                        "Manufacturing",
                        "Real estate renting and business activities",
                        "Mining and quarrying",
                        "Wholesale and retail trade repair of motor vehicles motorcycles and personal and household goods"
                    ],
                },
                yAxis: {
                    title: {
                        text: "Registrations",
                    }
                },
                tooltip: {
                    headerFormat:
                        '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat:
                        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
                    footerFormat: "</table>",
                    shared: true,
                    useHTML: true,
                },
                series: [{
                    name: '2016',
                    data: data["2016"]
            
                }, {
                    name: '2017',
                    data: data["2017"]
            
                }, {
                    name: '2018',
                    data: data["2018"]
            
                },{
                    name: '2019',
                    data: data["2019"]
            
                }]
            });
        });
}
