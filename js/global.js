$(document).ready(function(){

  $( function() {
    var dateFormat = "dd/mm/yy",
      from = $( "#datepicker" )
        .datepicker({
          dateFormat: 'dd/mm/yy',
          minDate: 0,
          firstDay: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#datepicker1" ).datepicker({
          dateFormat: 'dd/mm/yy',
          minDate: 0,
          firstDay: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
  
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
  
      return date;
    }
  } );
});
