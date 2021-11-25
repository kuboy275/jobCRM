/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - area
 *
 *  Google Visualization area chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Area chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawAreaChart);


// Chart settings
function drawAreaChart() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Date', '1', '2', '3', '4'],
        ['Aug 14, 2021', 12, 10, 14, 16],
        ['Aug 15, 2021', 14, 8, 18, 8],
        ['Aug 16, 2021', 14, 15, 12, 12],
        ['Aug 17, 2021', 10, 17, 13, 10],
        ['Aug 18, 2021', 12, 16, 14, 15],
        ['Aug 19, 2021', 13, 15, 12, 11],
    ]);


    // Options
    var options = {
        backgroundColor: 'transparent',
        height: 170,
        fontSize: 12,
        areaOpacity: 0,
        chartArea: {
            width: '100%',
            left: "0%",
            height: 120
        },
        pointSize: 0,

        vAxis: {
            textPosition: 'none',
            baselineColor: '#bbb',
            ticks: [],
        },
        hAxis: {
            baselineColor: '#bbb',
            textStyle: {
                color: '#bbb',
            },
        },
        anchor: 'end',
        legend: {
            position: 'none',
        },
        series: {
            0: { color: '#f6ebcd' },
            1: { color: '#ff756f' },
            2: { color: '#ca3233' },
            3: { color: '#680107' },
        }
    };

    // Draw chart
    var area_chart = new google.visualization.AreaChart($('#google-area')[0]);
    area_chart.draw(data, options);


}




// Resize chart
// ------------------------------

$(function() {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawAreaChart();
    }
});