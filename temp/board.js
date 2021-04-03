var l = 3;
var c = 4;

for (let i = 0 ; i < l ; i++) {
  var tr = document.createElement('tr');
  for (let j = 0 ; j < c ; j++) {
    var td = document.createElement('td');

    var div_container = document.createElement('div');
    div_container.setAttribute('class', 'card_box');

    var div_card = document.createElement('div');
    div_card.setAttribute('class', 'card');

    var div_front = document.createElement('div');
    div_front.setAttribute('class', 'card_front');
    div_front.innerHTML = '<img class = "card_image" src = "../images/anglais1.png">'
    
    var div_back = document.createElement('div');
    div_back.setAttribute('class', 'card_back');
    div_back.innerHTML ='<img class = "card_flag" src = "../images/fr.png">\n' +
                        '<p class = "card_word">Jambon</p>';

    div_card.appendChild(div_front);
    div_card.appendChild(div_back);

    div_container.appendChild(div_card);

    td.appendChild(div_container);

    tr.appendChild(td);
    tr.addEventListener("click", flipCard);
  }
  document.getElementById('cards').appendChild(tr);
}

const cards = document.querySelectorAll(".card");

function flipCard() {
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));