$(document).ready( function () {
    $('#home_table tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table1 = $('#home_table').DataTable({
        "lengthMenu": [[2, 10, 25, -1], [2, 10, 25, "All"]],
        stateSave: true,
        "bSort": false,
        initComplete: function () {
            // Apply the search
            this.api().columns().every( function () {
                var that = this;
                
                $( 'input', this.footer() ).on( 'keyup change clear', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                    }
                } );
            } );
        },
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
} );
