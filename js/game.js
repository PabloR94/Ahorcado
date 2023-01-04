
function createGame(){
    choose.style.display = "none";
    gameSection.style.display = "flex";
    newWordSection.style.display = "none";
}

;(function(){
    var game = {
        word:'ALURA',
        parte: 1,
        right: ['A', 'L'],
        wrong: ['B', 'J', 'K', 'C']
    }

    var $html = {
        hanged: document.getElementById('horca'),
        right: document.getElementById('right-word'),
        wrong: document.getElementById('wrong-word')
    }

    //Actualizar imagen del ahorcado
    function draw(game){
        $hanged = $html.hanged
        $hanged.src = 'img/partes/0' + game.parte + '.png'
    }

    
    draw(game)
}())