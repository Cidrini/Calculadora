// Inserir número a tela

function inserir(num) {
    document.querySelector(".tela").innerHTML += num;
}

// Limpar a tela 
function clean() {
    document.querySelector(".tela").innerHTML = "";

}

// Apagar o número
function back() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length -1);
}

// Somar
function somar() {
    let tela = document.querySelector(".tela").innerHTML;
    
    if(tela) { 
        document.querySelector('.tela').innerHTML = eval(tela);

    } else {
        document.querySelector('.tela').innerHTML = "nenhum comando"

    }
}
