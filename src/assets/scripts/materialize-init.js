

    

function initSelect(){
var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});      
};

    function initDateP(){
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {format:'dd/mm/yyyy'});
      };

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left',
        inDuration: 100
    });
});
    
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {
        
    });
  });
