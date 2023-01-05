
function createGame(){
    choose.style.display = "none";
    gameSection.style.display = "flex";
    newWordSection.style.display = "none";
}

;(function(){
    'use strict'
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

    function draw(game){
    //Actualizar imagen del ahorcado
        var $elem
        $elem = $html.hanged
        $elem.src = 'img/partes/0' + game.parte + '.png'
    
    //Creación de letras adivinadas
        var word = game.word
        var right = game.right
        $elem = $html.right
        for (let letter of word){
            let $span = document.createElement('span')
            let $txt = document.createTextNode('')
            if (right.indexOf(letter) >= 0) {
                $txt.nodeValue = letter
            }
            $span.setAttribute('class', 'letter right')
            $span.appendChild($txt)
            $elem.appendChild($span)
        }

        //Creación de letras erradas
        var wrong = game.wrong
        $elem = $html.wrong
        for (let letter of wrong){
            let $span = document.createElement('span')
            let $txt = document.createTextNode(letter)
            $span.setAttribute('class', 'letter wrong')
            $span.appendChild($txt)
            $elem.appendChild($span)
        }
    }
    
    draw(game)
}())