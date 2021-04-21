// Le produit l * c doit être pair
var l = 3;
var c = 4;

theme = 1;

score = 0;

var test = document.createElement('div');
board = Array(l);

//selected_cards = [];


function select_words() {
  output = [];
  used_words = [];
  len = matrice.length;
  n = (l*c)/2;
  i_init = getRandomInt(len - n);
  first = getRandomInt(2);
  //for (var selected_index=[], i = i_init ; i < i_init + n ; ++i) selected_index[i - i_init]=i;
  var selected_index = [];
  for (let i = i_init ; i < i_init + n ; i++) {
    selected_index[i - i_init] = i;
    selected_index[i - i_init + n] = i;
  }
  selected_index = shuffle(selected_index);
  //word = matrice[getRandomInt(matrice.length)][1];
  for (let i = 0 ; i < selected_index.length ; i++) {
    index = selected_index[i];
    language = 0;
    if (used_words.includes(index)) {
      if (first == 0) {
        language = 1;
      } else {
        language = 0;
      }
    } else {
      if (first == 0) {
        language = 0;
      } else {
        language = 1;
      }
    }
    //console.log(language, ~language+2);
    cur_word = [matrice[index][language], language, matrice[index][~language + 2]];
    output.push(cur_word);
    used_words.push(index);
  }
  console.log(output);
  return output;
}

function init() {
  words = select_words();
  for (let i = 0 ; i < l ; i++) {
    var tr = document.createElement('tr');
    board[i] = Array(c).fill(test);
    for (let j = 0 ; j < c ; j++) {
      //console.log(matrice.length)
      word = words[c*i+j][0];
      image_id = words[c*i+j][1];
      trad = words[c*i+j][2];
      image_url = "";
      if (image_id == 0) {
        image_url = "https://madmat3.github.io/images/uk.png"
      } else {
        image_url = "https://madmat3.github.io/images/fr.png"
      }

      var td = document.createElement('td');
  
      var div_container = document.createElement('div');
      div_container.setAttribute('class', 'card_box');
  
      var div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');
      div_card.setAttribute('x', i);
      div_card.setAttribute('y', j);
      div_card.setAttribute('id', c*i+j);
      div_card.setAttribute('word', word);
      div_card.setAttribute('trad', trad);
  
      var div_front = document.createElement('div');
      div_front.setAttribute('class', 'card_front');
      div_front.innerHTML = '<img class = "card_image" src = "https://madmat3.github.io/images/anglais1.png">'
  
      var div_back = document.createElement('div');
      div_back.setAttribute('class', 'card_back');
      div_back.innerHTML ='<img class = "card_flag" src = "' + image_url + '">\n' +
                          '<p class = "card_word">' + word + '</p>';
  
      div_card.appendChild(div_front);
      div_card.appendChild(div_back);
  
      div_container.appendChild(div_card);
  
      td.appendChild(div_container);
  
      tr.appendChild(td);
      //tr.addEventListener("click", flipCard);
      board[i][j] = div_card;
      div_card.addEventListener("click", identifyCard)
    }
    document.getElementById('cards').appendChild(tr);
  }
}

const cards = document.querySelectorAll(".card");
selected_cards = []
found_cards = []

function flipCard(id) {
  card = document.getElementById(id);
  card.classList.toggle("flip");
}
//cards.forEach((card) => card.addEventListener("click", flipCard));

function identifyCard() {
  id = this.getAttribute("id");
  console.log(selected_cards);
  if (selected_cards.includes(id)) {
    //flipCard(this.getAttribute("id"));
    //selected_cards.splice(selected_cards.indexOf(id));
  } else {
    if (selected_cards.length >= 2) {
      console.log("ntm");
    } else if (selected_cards.length == 1) {
      selected_cards.push(id);
      flipCard(this.getAttribute("id"));
      setTimeout(check_winning, 1000);
    } else {
      selected_cards.push(id);
      flipCard(this.getAttribute("id"));
    }
  }
}

function check_winning() {
  win = check_association(
    selected_cards[0],
    selected_cards[1]
  );
  if (win) {
    selected_cards = [];
    score += 10;
    found_cards.push(selected_cards[0]);
    found_cards.push(selected_cards[1]);
    document.getElementById("score").innerHTML = score;
    if (found_cards.length == words.length) {
      open('victory.html', '_self','resizable,location,menubar,toolbar,scrollbars,status');
    }
  } else {
    flipCard(selected_cards[0]);
    flipCard(selected_cards[1]);
    score -= 1;
    selected_cards = [];
    document.getElementById("score").innerHTML = score;
    console.log(found_cards.length, words.length);

    //open('victory.html', '_self','resizable,location,menubar,toolbar,scrollbars,status');
  }
}

function check_association(id1, id2) {
  console.log(id1, id2);
  card1 = document.getElementById(id1);
  card2 = document.getElementById(id2);
  if (card1.getAttribute("word") == card2.getAttribute("trad")) {
    //console.log("oui oui oui oui oui");
    return true;
  } else {
    //flipCard(id1);
    //flipCard(id2);
    return false;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

