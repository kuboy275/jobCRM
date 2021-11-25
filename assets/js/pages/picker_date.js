/* ------------------------------------------------------------------------------
 *
 *  # Date and time pickers
 *
 *  Specific JS code additions for picker_date.html page
 *
 *  Version: 1.1
 *  Latest update: Aug 10, 2016
 *
 * ---------------------------------------------------------------------------- */

$(function() {


    // Date range picker
    //
    // Pre-defined ranges and callback
    //
    $('.daterange-dashboard').daterangepicker({
            startDate: moment().subtract(1, 'days'),
            endDate: moment(),
            minDate: '01/01/2021',
            maxDate: moment(),
            dateLimit: { days: 60 },
            opens: 'left',
            applyClass: 'btn-small bg-slate',
            cancelClass: 'btn-small btn-default'
        },

        function(start, end) {

            if (start.month() === end.month()) {
                $('.daterange-dashboard span').html(start.format('MMMM D') + ' &nbsp; - &nbsp; ' + end.format(' D, YYYY'));
            } else {
                $('.daterange-dashboard span').html(start.format('MMMM D') + ' &nbsp; - &nbsp; ' + end.format('MMMM D, YYYY'));
            }
            // $.jGrowl('Date range has been changed', { header: 'Update', theme: 'bg-primary', position: 'center', life: 1500 });
        }
    );
    $('.daterange-dashboard span').html(moment().subtract(1, 'days').format('MMMM D') + ' &nbsp; - &nbsp; ' + moment().format('D, YYYY'));


});