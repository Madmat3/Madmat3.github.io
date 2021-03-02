
var l = 3;
var c = 4;

for (let i = 0 ; i < l ; i++) {
  var tr = document.createElement('tr');
  for (let j = 0 ; j < c ; j++) {
    var td = document.createElement('td');
    td.innerHTML = "TUTO";
    tr.appendChild(td);
  }
  document.getElementById('test').appendChild(tr);
}

/*for (let i = 0; i < 5 ; i++) {
  var div       = document.createElement('div');
  div.setAttribute('class', 'cards__single');

  var div_front = document.createElement('div');
  div_front.setAttribute('class', 'cards__front');
  div_front.innerHTML = '<img class="cards__image" src="images/hello-icon-128.png" alt="Coucou"/>'
  
  var div_back = document.createElement('div');
  div_back.setAttribute('class', 'cards__back');
  div_back.innerHTML = '<p>Miiiiichel  forever tonight</p>';

  div.appendChild(div_front);
  div.appendChild(div_back);
  div.addEventListener("click", flipCard);
  document.getElementById("test").appendChild(div);
}*/

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function flipCard() {
  this.classList.toggle("flip");
}