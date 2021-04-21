$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://madmat3.github.io/ressources/dictionnaire.csv",
        dataType: "text",
        success: function(data) {processData(data); init();}
     });
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://madmat3.github.io/ressources/theme.csv",
        dataType: "text",
        success: function(data) {processDataTheme(data); initDictionnnaire(); initAddWord();}
     });
});

var matrice = [];
var themes = [];

function processData(allText) {
    var record_num = 3;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var size = allTextLines.length;
    for (var i=0; i<size ; i++) {
        entries = allTextLines[i].split(',');
        if (entries.length == 3) {
            matrice.push(entries);
        }   
    }
}

function processDataTheme(allText) {
    var record_num = 2;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var size = allTextLines.length;
    for (var i=0; i<size ; i++) {
        entries = allTextLines[i].split(',');
        if (entries.length == 2) {
           themes.push(entries);
        }   
    } 
}

