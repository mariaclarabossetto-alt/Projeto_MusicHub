botaoEsconder = document.getElementById("botao-minimizar");
aside = document.getElementById("player");
botaoMostrar = document.getElementById("botao-mostrar")

botaoEsconder.addEventListener("click", function(){
    aside.classList.add("oculto");
    botaoMostrar.classList.remove("oculto");
})

botaoMostrar.addEventListener("click", function(){
    botaoMostrar.classList.add("oculto");
    aside.classList.remove("oculto");
})