function btnAddWord(){
    choose.style.display = "none";
    gameSection.style.display = "none";
    newWordSection.style.display = "flex";
}

//Botones
const buttonSavePlay = document.querySelector("#save-play");
const buttonCancel = document.querySelector("#cancel");

buttonSavePlay.addEventListener("click", addWord);
buttonCancel.addEventListener("click", principal);

//Agregar palabras
function value() {
    let input = document.getElementById("input-txt");
    input.value = "";
}

function addWord() {
    let input = document.getElementById('input-txt').value;
    
    if (/[^a-zñ]/.test(input)) {
        Swal.fire({
            icon: 'warning',
            iconColor: '#FA8630',
            background: '#FFBC43',
            title: 'Oops...',
            showConfirmButton: false,
            text: 'Solo se permiten letras minúsculas sin tilde',
        })
    }

    else if (input.length === 0) {
        Swal.fire({
            icon: 'error',
            iconColor: '#FA3222',
            background: '#FFBC43',
            title: 'Oops...',
            confirmButtonColor: '#4A5E60',
            text: 'El campo de texto está vacio',
        })
    }

    else {
        //wordsList.push(input) Revisar
        Swal.fire({
            icon: 'success',
            iconColor: '#35FA32',
            background: '#FFBC43',
            title: '¡Muy Bien!',
            confirmButtonColor: '#4A5E60',
            text: 'Palabra añadida con éxito',
        })
        value()
    }
}