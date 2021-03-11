var l = 3;
var c = 4;

for (let i = 0 ; i < l ; i++) {
  var tr = document.createElement('tr');
  for (let j = 0 ; j < c ; j++) {
    var td = document.createElement('td');
    // td.innerHTML = "TUTO";

    var div_card = document.createElement('div');
    div_card.setAttribute('class', 'cards__single');

    var div_front = document.createElement('div');
    div_front.setAttribute('class', 'cards__front');
    div_front.innerHTML = '<img class="cards__image" src="images/hello-icon-128.png" alt="Coucou"/>'
    
    var div_back = document.createElement('div');
    div_back.setAttribute('class', 'cards__back');
    div_back.innerHTML = '<p>Miiiiichel  forever tonight</p>';

    div_card.appendChild(div_front);
    div_card.appendChild(div_back);

    td.appendChild(div_card);

    tr.appendChild(td);
    tr.addEventListener("click", flipCard);
  }
  document.getElementById('test').appendChild(tr);
}

const cards = document.querySelectorAll(".cards__single");

function flipCard() {
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));