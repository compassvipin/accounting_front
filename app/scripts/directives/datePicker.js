scotchApp.directive('datepicker', function() {
  return {
    link: function(scope, el, attr) {
      $(el).datepicker({
        onSelect: function(dateText) {
          // console.log(dateText);
          // how do i set this elements model property ?
        },
        showOtherMonths: true,
        selectOtherMonths: true,   
       

      });
    }
  };
});