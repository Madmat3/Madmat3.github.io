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
        success: function(data) {processDataTheme(data); initDictionnnaire();}
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
    // console.log(matrice);
    
/*
    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            entries = allTextLines[j].split(',');
            tarr.push(entries);
            console.log(tarr);
        }
        lines.push(tarr);
        
    }
    // alert(lines);
    console.log(lines);*/
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

