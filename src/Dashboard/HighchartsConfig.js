export default function() {
    return {
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
        subtitle: {
            text: "Source: thesolarfoundation.com"
        },
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
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
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 119931, 137133, 154175]
        },{
            name: 'Manufacturing',
            data: [5, 7, 3]
        },{
            name: 'Sales & Dist',
            data: [34324, 48230, 234379, 80890, 54340, 992347, 432432]
        },{
            name: 'Project Development',
            data: [null, null, 5, 7, 3]
        },{
            name: 'Other',
            data: [22332, 85936, 232141, 727791, 119931, 576639, 994492]
        }],

        responsiveness: {
            rules: [{
                condition: {
                    maxWidth: 500
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