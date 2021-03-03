export default function(historical) {
    return {
        title: {
            text: 'Cryptocurrency Value Over Time'
        },
        subtitle: {
            text: "Data Courtesy of Cryptocompare API"
        },
        yAxis: {
            title: {
                text: 'Price'
            }
        },
        xAxis: {type: "datetime"},
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: historical,

        responsiveness: {
            rules: [{
                condition: {
                    maxWidth: 100,
                    maxHeight: 100
                },
                chartOptions: {
                    legend:{
                        layout: "horizontal",
                        align: "center",
                        verticalAlign: "bottom" 
                    } 
                }
            }]
        }
    };
}