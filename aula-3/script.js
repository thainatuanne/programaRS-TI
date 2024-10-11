$(document).ready(function() {
    $.getJSON("https://randomuser.me/api/?results=50&nat=br", function(data) {
        if (!$.fn.DataTable.isDataTable('table')) {
            $('table').dataTable({
                "aaData": data.results,
                "bProcessing": true,
                "columns": [
                    { data: null, searchable: false, render: function (data, type, row, meta) {
                            return meta.row + 1;
                        }
                    },
                    { data: "picture.thumbnail", searchable: false, render: function (data) {
                            return '<img src="' + data + '" class="img-thumbnail" alt="User Image" style="width: 45px; height: 45px;">';
                        }
                    },
                    { data: "login.username" },
                    { data: "name.first" },  
                    { data: "name.last" },      
                    { data: "gender" },       
                    { data: "email" },       
                    { data: "phone" },      
                    { data: "location.street.name", render: function(data, type, row) {
                            return $.trim(row.location.street.name) + ", " + row.location.street.number;
                        }
                    },                          
                    { data: "location.city" }, 
                    { data: "location.state" }, 
                    { data: "location.country" }
                ],
                "language": {
                    "lengthMenu": "Exibir _MENU_ registros por página",
                    "zeroRecords": "Nenhum registro encontrado",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ inscritos",
                    "infoEmpty": "Nenhum inscrito disponível",
                    "infoFiltered": "(filtrado de _MAX_ inscritos no total)",
                    "search": "Buscar:",
                    "paginate": {
                        "first": "Primeiro",
                        "last": "Último",
                        "next": "Próximo",
                        "previous": "Anterior"
                    }
                },
                "search": {
                    "regex": true
                }
            });
        }
    });
});