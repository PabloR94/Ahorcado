const choose = document.querySelector("#choose");
const gameSection = document.querySelector("#game");
const newWordSection = document.querySelector("#new-word");

window.onload = function main(){
gameSection.style.display = "none";
newWordSection.style.display = "none";
document.getElementById("music1").play();
sound();

//Botones
const buttonPlayGame = document.querySelector("#play-game");
const buttonAddWord = document.querySelector("#add-word");

buttonPlayGame.addEventListener("click", createGame);
buttonAddWord.addEventListener("click", btnAddWord);
}