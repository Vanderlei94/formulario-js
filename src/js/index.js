const campos = document.querySelectorAll(".campo");
const avisos = document.querySelectorAll(".aviso-no-campo");

const botao = document.getElementById("botao-enviar");

botao.addEventListener('click', verificarCampos);


function verificarCampos(){
    campos.forEach((campo, index) => {
        if (campo.value.trim() === ""){
            campo.classList.add("aviso-obrigatorio");
            campo.classList.remove("campo-ok")
            avisos[index].classList.add("mostrar");
        }else{
            campo.classList.remove("aviso-obrigatorio");
            campo.classList.add("campo-ok");
            avisos[index].classList.remove("mostrar");
        }
    })
};