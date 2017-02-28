var width = 40;
var elem;
$("select").change(function(e) {
  elem = $('#' + $(this).val().trim())
}).trigger("change");

$('button').on('click', function(e) {
  e.preventDefault();
  var data = $(this).data();
  var width = Number((elem.width() / elem.parent().width() * 100).toFixed(0));
  //debugger;
  switch (data.operator) {
    case '-':
      if ((width) > 0) {
        var calculated = (width - data.width) + "%"
        elem.width(calculated).text(calculated);
          if((width - data.width) < 60 && (width - data.width) > 50 ){
              elem[0].className="progress-bar progress-bar-info";
          }
          else if((width - data.width) > 60  && (width - data.width) < 70 ){
              elem[0].className="progress-bar progress-bar-warning";
          }
          else if((width - data.width) > 70){
              elem[0].className="progress-bar progress-bar-danger";
          }
          else if((width - data.width) < 50){
              elem[0].className="progress-bar progress-bar-success";
          }
          else if((width - data.width) < 0){
            var calculated = (0) + "%"
            elem.width(calculated).text(0);
          }
      } 
      break;
    case '+':
      if ((width) < 100) {
        var calculated = (width + data.width) + "%"
        elem.width(calculated).text(calculated);
          if((width + data.width) > 50 && (width + data.width) < 60 ){
              elem[0].className="progress-bar progress-bar-info";
          }
          else if((width + data.width) > 60  && (width + data.width) < 70 ){
              elem[0].className="progress-bar progress-bar-warning";
          }
          else if((width + data.width) > 70){
              elem[0].className="progress-bar progress-bar-danger";
          }
          else if((width + data.width) > 100){
            var calculated = (100) + "%"
            elem.width(calculated).text(100);
          }
      }
      break;
  }

});