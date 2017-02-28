var width = 40;
var elem;
$("select").change(function(e) {
    elem = $('#' + $(this).val().trim());
}).trigger("change");

$('button').on('click', function(e) { //find the button s per the click target
    e.preventDefault();
    var data = $(this).data();
    var width = Number((elem.width() / elem.parent().width() * 100).toFixed(0)); //Find the width
    var calculated;
    switch (data.operator) { //get the data operator and run the switch
        case '-':
            if ((width) > 0) {
                calculated = (width - data.width) + "%";
                elem.width(calculated).text(calculated);
                if ((width - data.width) < 60 && (width - data.width) > 50) {
                    elem[0].className = "progress-bar progress-bar-info";
                } else if ((width - data.width) > 60 && (width - data.width) < 70) {
                    elem[0].className = "progress-bar progress-bar-warning";
                } else if ((width - data.width) > 70) {
                    elem[0].className = "progress-bar progress-bar-danger";
                } else if ((width - data.width) < 50) {
                    elem[0].className = "progress-bar progress-bar-success";
                } 
            }
             if ((width - data.width) < 0) {
                    calculated = (0) + "%";
                    elem.width(calculated).text(0);
                }
            break;
        case '+':
            if ((width) < 100) {
                calculated = (width + data.width) + "%";
                elem.width(calculated).text(calculated);
                if ((width + data.width) > 50 && (width + data.width) < 60) {
                    elem[0].className = "progress-bar progress-bar-info";
                } else if ((width + data.width) > 60 && (width + data.width) < 70) {
                    elem[0].className = "progress-bar progress-bar-warning";
                } else if ((width + data.width) > 70) {
                    elem[0].className = "progress-bar progress-bar-danger";
                } 
            }
            if ((width + data.width) > 100) {
                    calculated = (100) + "%";
                    elem.width(calculated).text(100);
                }
            break;
    }

});