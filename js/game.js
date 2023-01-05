
function createGame(){
    choose.style.display = "none";
    gameSection.style.display = "flex";
    newWordSection.style.display = "none";
}

;(function(){
    'use strict'
    var game = {
        word:'ALURA',
        state: 7,
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
        $elem.src = 'img/partes/0' + game.state + '.png'
    
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

    function guess(game, letter){
        var state = game.state
        //Si se ha ganado o perdido, no hay nada que hacer
        if (state == 1 || state == 8){
            return
        }

        var right = game.right
        var wrong = game.wrong
        //Si se adivino o erro la letra, tampoco hay que hacer nada
        if (right.indexOf(letter) >= 0 || wrong.indexOf(letter) >= 0){
            return
        }

        var word = game.word
        //Si la letra esta en la palabra
        if (word.indexOf(letter) >= 0){
            let win = true
            //Comprobar si se llega al estado ganado
            for (let l of word){
                if (right.indexOf(l) < 0 && l != letter){
                    win = false
                    break
                }
            }
            //Si se ha ganado, se indica el estado ganado
            if (win){
                game.state = 8
            }
            //Agregar letra a lista de letras adivinadas
            right.push(letter)
        } else{
            //Si la letra no está en la palabra se cambia el estado
            game.state--
            //Agregar letra a lista de letras erradas
            wrong.push(letter)
        }
    }
    
    draw(game)
    guess(game, 'U')
    guess(game, 'R')

}())