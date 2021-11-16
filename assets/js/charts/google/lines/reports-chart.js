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
        ['Year', 'Net net sales', 'Existing net sales'],
        ['2004', 0, 500],
        ['2005', 800, 1200],
        ['2006', 1200, 700],
        ['2007', 1500, 1000],
        ['2007', 2000, 3500]
    ]);


    // Options
    var options = {
        backgroundColor: 'transparent',
        height: 280,
        fontSize: 12,
        areaOpacity: 0,
        chartArea: {
            left: '10%',
            width: '80%',
            height: 200,
        },
        seriesDefaults: {
            rendererOptions: {
                barPadding: 0,
                barMargin: 10
            },
            pointLabels: {
                show: true,
                stackedValue: true
            }
        },
        pointSize: 0,

        vAxis: {
            textStyle: {
                fontSize: 12,
                bold: true
            },
            minValue: 0,
            maxValue: 6000
        },
        hAxis: {
            textStyle: {
                fontSize: 12,
                bold: true,
            },
        },
        legend: {
            position: 'bottom',
            alignment: 'center',
            textStyle: {
                fontSize: 12,
                bold: true,
                top: 100,
            }
        },
        colors: ['#ffc91d', '#ca3233']
    };

    // Draw chart
    var area_chart = new google.visualization.AreaChart($('#reports-line')[0]);
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