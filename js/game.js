
function createGame(){
    choose.style.display = "none";
    gameSection.style.display = "flex";
    newWordSection.style.display = "none";
}

const buttonDesist = document.querySelector("#desist");
buttonDesist.addEventListener("click", principal);

function principal(){
    choose.style.display = "flex";
    gameSection.style.display = "none";
    newWordSection.style.display = "none";
}

;(function(){
    'use strict'
    //Almacenar configuración
    var game = null
    //Comprobar si se ha enviado alguna alerta
    var end = false

    var $html = {
        hanged: document.getElementById('horca'),
        right: document.getElementById('right-word'),
        wrong: document.getElementById('wrong-word')
    }

    function draw(game){
    //Actualizar imagen del ahorcado
        var $elem
        $elem = $html.hanged

        var state =game.state
        if (state == 8){
            state = game.before
        }
        $elem.src = 'img/partes/0' + state + '.png'
    
    //Creación de letras adivinadas
        var word = game.word
        var right = game.right
        $elem = $html.right
        //Borrar elementos anteriores
        $elem.innerHTML = ''
        //
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
        //Borrar elementos anteriores
        $elem.innerHTML = ''
        //
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
                    game.before = game.state
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
    
    window.onkeypress = function guessLetter(e){
        var letter = e.key
        letter = letter.toUpperCase()
        if (/[^A-ZÑ]/.test(letter)){
            return
        }
        guess(game, letter)
        var state = game.state
        if (state == 8 && !end){
            setTimeout(alertWin, 500)
            end = true
        } else if (state == 1 && !end){
            let word = game.word
            let fn = alertLose.bind(undefined, word)
            setTimeout(fn, 500)
            end = true
        }
        draw(game)
    }

    window.newGame = function newGame(){
        var word = randomWord()
        game = {}
        game.word = word
        game.state = 7
        game.right = []
        game.wrong = []
        end = false
        draw(game)
    }

    function randomWord(){
        var index = ~~(Math.random() * wordsList.length)
        return wordsList [index]
    }

    function alertWin(){
        alert('Felicidades, ganaste!')
    }
    function alertLose(word){
        alert('Lo siento, perdiste... la palabra era: ' + word)
    }

    newGame()
}())