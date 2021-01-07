$(document).ready( function () {
    $('#home_table tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table1 = $('#home_table').DataTable({
        "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
        stateSave: true,
        "bSort": true,
        "columnDefs": [
            { "targets": 0, "width": "5%" },
            { "targets": 1, "width": "50%",  },
            { "targets": 2, "width": "15%", "searchable": true, "orderable":false},
            { "targets":[3,4, 5], "width": "10%"  },
            { "searchable": false, "targets" : '_all' }
          ],

    });

    table1.columns().eq( 0 ).each( function ( colIdx ) {
            if( table1.settings()[0].aoColumns[colIdx].bSearchable ){
            table1.column( colIdx ).header().innerHTML=table1.column( colIdx ).footer().innerHTML;
        }
            $( 'input', table1.column( colIdx ).header() ).on( 'keyup change', function () {
                table1
                    .column( colIdx )
                    .search( this.value )
                    .draw();
            } );
        } );

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
} );
