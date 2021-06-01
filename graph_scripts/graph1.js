function authorizedCap() {
  var frequency = [];
  fetch("json_data/1authorized_cap.json")
    .then((response) => response.json())
    .then((data) => {
      for (i = 1; i <= 5; i++) {
        frequency.push(data[i]);
      }
      console.log(frequency)
      Highcharts.chart("container", {
        chart: {
          type: "column",
        },
        title: {
          text: "Histogram of Authorized Capital"
        },
        xAxis: {
          type: "category",
          categories: [
            "<= 1L",
            "1L to 10L",
            "10L to 1Cr",
            "1Cr to 10Cr",
            ">10Cr",
          ],
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
            name: "Authorized Capital",
            data: frequency,
          },
        ],
      });
    });
}
