$(document).ready(function() {

    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    DataTable.tables({ visible: true, api: true }).columns.adjust();
    });

    var table = $('#myTable1').DataTable({
        ajax: 'data/arrays.txt',
        searching: true,
        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var title = column.footer().textContent;

                // Create input element and add event listener
                $('<input type="text" placeholder="Search ' + title + '" />')
                    .appendTo($(column.footer()).empty())
                    .on('keyup change clear', function () {
                        if (column.search() !== this.value) {
                            column.search(this.value).draw();
                        }
                    });
            });
        },
        layout: {
            top: 'paging',
            topStart: {
                buttons: ['colvis'],
                div: {
                    className: 'btn btn-danger',
                    id: 'delete_button',
                    html: 'Delete Selected Row'
                }
            },
            topEnd: null,
            bottomStart: 'pageLength',
            bottom2Start: 'info',
            bottomEnd: null,
        }
    });


    $('#myTable1 tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
          console.log('Row deselected');
        } else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          console.log('Row selected');
        }
      });
      
      $('#delete_button').click(function() {
        table.row('.selected').remove().draw(false);
        console.log('Selected row deleted');
      });

      var table2 = $('#myTable2').DataTable({
        ajax: 'data/arrays.txt',
        searching: true,
        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var title = column.footer().textContent;

                // Create input element and add event listener
                $('<input type="text" placeholder="Search ' + title + '" />')
                    .appendTo($(column.footer()).empty())
                    .on('keyup change clear', function () {
                        if (column.search() !== this.value) {
                            column.search(this.value).draw();
                        }
                    });
            });
        },
        layout: {
            top: 'paging',
            topStart: {
                buttons: ['colvis'],
                div: {
                    className: 'btn btn-danger',
                    id: 'delete',
                    html: 'Delete Selected Row'
                }
            },
            topEnd: null,
            bottomStart: 'pageLength',
            bottom2Start: 'info',
            bottomEnd: null,
        }
    });


    $('#myTable2 tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
          console.log('Row deselected');
        } else {
          table2.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          console.log('Row selected');
        }
      });
      
      $('#delete').click(function() {
        table2.row('.selected').remove().draw(false);
        console.log('Selected row deleted');
      });  

});


