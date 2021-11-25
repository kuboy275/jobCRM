/* ------------------------------------------------------------------------------
 *
 *  # Basic datatables
 *
 *  Specific JS code additions for datatable_basic.html page
 *
 *  Version: 1.0
 *  Latest update: Aug 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function() {


    // Table setup
    // ------------------------------

    // Setting datatable defaults
    $.extend($.fn.dataTable.defaults, {
        searching: false,
        info: false,
        paging: false,
        autoWidth: false,
        columnDefs: [{
            orderable: false,
            // targets: [-1]
        }],
        // dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
        // drawCallback: function() {
        //     $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        // },
        // preDrawCallback: function() {
        //     $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        // }
    });


    // Basic datatable
    $('.datatable-glosseries').DataTable();


    // Alternative pagination
    $('.datatable-pagination').DataTable({
        pagingType: "simple",
        language: {
            paginate: { 'next': 'Next &rarr;', 'previous': '&larr; Prev' }
        }
    });


    // Datatable with saving state
    $('.datatable-save-state').DataTable({
        stateSave: true
    });


    // Scrollable datatable
    $('.datatable-scroll-y').DataTable({
        autoWidth: true,
        scrollY: 300
    });



    // External table additions
    // ------------------------------

    // Enable Select2 select for the length option
    // $('.dataTables_length select').select2({
    //     minimumResultsForSearch: Infinity,
    //     width: 'auto'
    // });

});