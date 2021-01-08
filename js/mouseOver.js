function mouseOver() {
    //window.open("https://www.planbwebapps.com.br");
    //document.getElementById("mouseOver").innerHTML = "<b>Teste concluído com sucesso!</b>";
    alert("Teste concluído com sucesso!");
};

function mouseOverId() {

    document.getElementById("mouseOverId").innerHTML = "<b>Teste ID concluído com sucesso!</b>";

};

function trocar(elemento) {
    //document.getElementById("mouseOverVoltar").innerHTML = "<b>Obrigado por passar o mouse!</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse!</b>";
};


function mouseOverVoltar(elemento) {
    //document.getElementById("mouseOverVoltar").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse!</b>";
};

function load() {
    alert("Página carregada!");

}

function funcaoChange(elemento) {
    console.log(elemento.value);
}