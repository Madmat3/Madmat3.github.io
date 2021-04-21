var l = 3;
var c = 4;

var test = document.createElement('div');
board = Array(l);

selected_cards = [];
selected_words = [];

function init() {
  for (let i = 0 ; i < l ; i++) {
    var tr = document.createElement('tr');
    board[i] = Array(c).fill(test);
    for (let j = 0 ; j < c ; j++) {
      var td = document.createElement('td');
  
      var div_container = document.createElement('div');
      div_container.setAttribute('class', 'card_box');
  
      var div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');
      div_card.setAttribute('x', i);
      div_card.setAttribute('y', j);
      div_card.setAttribute('id', c*i+j);
  
      var div_front = document.createElement('div');
      div_front.setAttribute('class', 'card_front');
      div_front.innerHTML = '<img class = "card_image" src = "https://madmat3.github.io/images/anglais1.png">'
      
      console.log(matrice.length)
      word = matrice[getRandomInt(matrice.length)][1]
  
      var div_back = document.createElement('div');
      div_back.setAttribute('class', 'card_back');
      div_back.innerHTML ='<img class = "card_flag" src = "https://madmat3.github.io/images/fr.png">\n' +
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

function flipCard(id) {
  card = document.getElementById(id);
  card.classList.toggle("flip");
}
//cards.forEach((card) => card.addEventListener("click", flipCard));

function identifyCard() {
  id = this.getAttribute("id");
  console.log(selected_cards);
  if (selected_cards.includes(id)) {
    selected_cards.splice(selected_cards.indexOf(id));
    flipCard(this.getAttribute("id"));
  } else {
    if (selected_cards.length >= 2) {
      console.log("ntm");
    } else {
      selected_cards.push(id);
      flipCard(this.getAttribute("id"));
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
