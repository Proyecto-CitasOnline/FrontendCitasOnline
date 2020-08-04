const { format } = require("path");

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, 
            {
                edge: 'left',
                inDuration: 300
            });
    });

    function initSelect(){
    var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      
    };

    function initDateP(){
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {format:'dd/mm/yyyy'});
      };