document.getElementById("game").style.display = "none";
// btn_play = document.getElementById("play-btn").addEventListener('click', function(e) {
//     e.preventDefault();
//     begin_init();
// });

function begin_init() {
    console.log("coucou");
    document.getElementById("game-setup").style.display = "none";

    init();

    document.getElementById("game").style.display = "block";
    return false;
}