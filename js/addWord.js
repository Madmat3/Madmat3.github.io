function initAddWord() {
    $(document).ready(function() {
    displayThemesAdd('fexistingCat');
    });
}

function initDictionnnaire() {}
function init() {}

function addWord(wordEng, wordFr, cat) {
	var newWordArray = [wordEng, wordFr, cat];
	matrice.push(newWordArray);
    console.log(matrice);
	localStorage.setObj('data', matrice);   // TODO revoir l'update de l'enregistrement
}

function displayAddWord() {
	var wordEng = document.getElementById("wordEng").value;
	var wordFr = document.getElementById("wordFr").value;
    var themeWord = document.getElementById("fexistingCat").value;
    var themeNumber = -1;
    var maxthemeNumber = 0;
    
    if (themeWord != "New theme") {     // si c'est un theme déjà existant
        for(var i = 0 ; i < themes.length ; i++) {
            if(themeWord == themes[i][0]) {
            	themeNumber = themes[i][1];
            }
        }
    } else {
        for(var i = 0 ; i < themes.length ; i++) {
            if (maxthemeNumber < themes[i][1]) {
                maxthemeNumber = themes[i][1];
            }
        }
        var newThemeArray = [document.getElementById("fnewCat").value, (Number(maxthemeNumber)+1).toString()];
        themes.push(newThemeArray);
        console.log(themes);
        themeNumber = (Number(maxthemeNumber)+1).toString();
        localStorage.setObj('fexistingCat', themes);     // TODO revoir l'update de l'enregistrement
    }
    addWord(wordEng, wordFr, themeNumber);
	document.getElementById("wordEng").value = '';
	document.getElementById("wordFr").value = '';
}

function displayThemesAdd(idSelectCat) {
    var themeList = document.getElementById(idSelectCat);
	var allThemes = getAllThemes();
    var opt = document.createElement("option");
    opt.text = "New theme";
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

