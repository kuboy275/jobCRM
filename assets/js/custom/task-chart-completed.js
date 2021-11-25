/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - columns
 *
 *  Google Visualization column chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Column chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawColumn);


// Chart settings
function drawColumn() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['', 'pendingTask'],
        ['1', 20],
        ['2', 15],
        ['3', 12],
        ['1', 20],
        ['2', 15],
        ['3', 12],
        ['1', 20],
        ['2', 15],
        ['3', 12],
        ['1', 20],
        ['2', 15],
        ['3', 12],
        ['1', 20],
        ['2', 15],
        ['3', 12],
        ['3', 12],
        ['1', 20],
        ['2', 15],
        ['3', 12],
    ]);


    // Options
    var options_column = {
        backgroundColor: "transparent",
        height: 50,
        chartArea: {
            width: '100%',
            height: 50
        },
        vAxis: {
            baselineColor: 'none',
            ticks: [],
        },
        hAxix: {
            baselineColor: 'none',
            ticks: [],
        },
        colors: ["#ca3233"],
        bar: { groupWidth: '75%' },
        enableInteractivity: false,
    };

    // Draw chart
    var column = new google.visualization.ColumnChart($('#task-chart-completed')[0]);
    column.draw(data, options_column);
}


// Resize chart
// ------------------------------

$(function() {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawColumn();
    }
});