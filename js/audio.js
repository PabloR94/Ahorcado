function sound(){
    const sound = document.getElementById('sound');
    const music1 = document.getElementById('music1');
    const music2 = document.getElementById('music2')
    const volumen = document.querySelector('.volumen');
    sound.addEventListener("click", function(){
        volumen.style.display= "flex";
        volumen.addEventListener("click", function(){
        let vol = this.value
        music1.volume = vol
        music2.volume = vol

        let speaker = document.getElementById('speaker')
        if (vol == 0){
            speaker.src = 'img/sonidoOff.png'
        } else{
            speaker.src = 'img/sonidoOn.png'
        }
        })
    })

    volumen.addEventListener("mouseout", function(){
        volumen.style.display= "none";
    })

    //Dispositivos moviles
    sound.addEventListener("touchstart", function(){
        volumen.style.display= "flex";
        volumen.addEventListener("touchmove", function(){
        let vol = this.value
        music1.volume = vol
        music2.volume = vol

        let speaker = document.getElementById('speaker')
        if (vol == 0){
            speaker.src = 'img/sonidoOff.png'
        } else{
            speaker.src = 'img/sonidoOn.png'
        }
        })
    })

    volumen.addEventListener("touchend", function(){
        volumen.style.display= "none";
    })
}