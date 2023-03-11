document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        xAxis: {
            categories: ['Intelligence', 'Talent', 'Common sense']
        },
        series:[{
            name: 'Mohnish', 
            data: [5, 6, 4]
        },
        {
            name: 'Piyush', 
            data: [4, 5, 3]
        },

        {
            name: 'Pairav', 
            data: [9, 5, 6]
        }
    ]
    });
});
