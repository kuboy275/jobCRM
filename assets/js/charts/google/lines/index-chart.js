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
        ['Year', '1', '2', '3', '4'],
        ['2004', 12, 10, 14, 16],
        ['2005', 14, 8, 18, 8],
        ['2006', 14, 15, 11, 12],
        ['2007', 10, 12, 16, 10]
    ]);


    // Options
    var options = {
        backgroundColor: 'transparent',
        height: 170,
        fontSize: 12,
        areaOpacity: 0,
        chartArea: {
            width: '94%',
            height: 120
        },
        pointSize: 0,

        vAxis: {
            textPosition: 'none',
        },
        hAxis: {
            showTextEvery: 3,
            textStyle: { color: '#535c68' }
        },
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