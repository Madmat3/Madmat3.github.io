function initDictionnnaire() {
    $(document).ready(function() {
        displayWords(localStorage.getObj('data'));
        displayThemes('cat-options');
    });
}

function init() {}
function initAddWord() {}


function displayThemes(idSelectCat) {
    var themeList = document.getElementById(idSelectCat);
	var allThemes = getAllThemes();
    var opt = document.createElement("option");
    opt.text = "all";
    themeList.add(opt);
	for(var i = 0 ; i < allThemes.length ; i++) {
		var opt = document.createElement("option");
		opt.text = allThemes[i];
		themeList.add(opt);
	}
}

function getAllThemes() {
    var max = themes.length;
	var themeList = new Array();
	for(var i = 0 ; i < themes.length ; i++) {
		if(!themeList.includes(themes[i][0])) {
			themeList.push(themes[i][0]);
		}
	}
	return themeList;
}


function displayWords(words) {
      var table_data = '<table class="table table-bordered table-striped">';

      table_data += '<tr id="header-table">';
      table_data += '<th>English word</th>';
      table_data += '<th>French translation</th>';
      table_data += '<th>Theme</th>';
      table_data += '</tr>';

      for(var count = 0 ; count < words.length ; count++) {
        var line = words[count];
        if(count % 2 == 0) table_data += '<tr class="even-row">';
        else table_data += '<tr>';
        for(var line_count=0; line_count<line.length; line_count++)
           if (line_count == 2) {
                var theme_line;
                for(var i = 0 ; i < themes.length ; i++) {
		            if(line[line_count] == themes[i][1]) {
		            	theme_line = themes[i][0];
		            }
	            }
                table_data += '<td>'+ theme_line +'</td>';
           } else {
                table_data += '<td>'+line[line_count]+'</td>';
           }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#words-table').html(table_data);
}

function displayWordsTheme() {
    var e = document.getElementById("cat-options");
    var catSelected = e.options[e.selectedIndex].text;
    displayWords(getWordsFromTheme(catSelected));
}

function getWordsFromTheme(cat) {
    if (cat == 'all') return matrice;
    var tempWords = new Array();
    var numberTheme = 0;
    for(var i = 0 ; i < themes.length ; i++) {
        if(cat == themes[i][0]) {
            numberTheme = themes[i][1];
	    }
    }
    for(var i=0 ; i<matrice.length ; i++) {
	    if(matrice[i][2] == numberTheme) {
		    tempWords.push(matrice[i]);
	    }
    }
	return tempWords;
}
