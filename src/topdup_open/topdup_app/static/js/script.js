$(document).ready( function () {
    var table1 = $('#home_table').DataTable({
        "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
        stateSave: true,
        "bSort": false,
    });
    table1.on( 'order.dt search.dt', function () {
        table1.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
    var table2 = $('#detail_table').DataTable({
        "order": [[ 1, "asc" ]],
        "bSort": false
        });
    table2.on( 'order.dt search.dt', function () {
        table2.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
    var table3 = $('#all_posts_table').DataTable({
        "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
        stateSave: true,
        "bSort": false,
        });
    table3.on( 'order.dt search.dt', function () {
        table3.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
    var myVar = "Data 1";
    $('#home_table').append('<caption style="caption-side: top-right">'+myVar+'</caption>')
} );
