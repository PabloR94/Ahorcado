const choose = document.querySelector("#choose");
const gameSection = document.querySelector("#game");
const newWordSection = document.querySelector("#new-word");

window.onload = function main(){
gameSection.style.display = "none";
newWordSection.style.display = "none";
document.getElementById("music1").play();
music1.volume = 0.4;
document.getElementById("music2");
music2.volume = 0.4;
sound();

//Botones
const buttonPlayGame = document.querySelector("#play-game");
const buttonAddWord = document.querySelector("#add-word");

buttonPlayGame.addEventListener("click", createGame);
buttonAddWord.addEventListener("click", btnAddWord);
}