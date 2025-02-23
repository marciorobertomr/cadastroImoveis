let cadastro = document.getElementById('cadastro');
if (cadastro) {
    cadastro.addEventListener('click', () => {
        window.location.href = "cadastro-imoveis.html";
    })
}

let baseDados = document.getElementById('base-dados');
if (baseDados) {
    baseDados.addEventListener('click', () => {
        window.location.href = 'base-imoveis.html';
    })
}

let menu = document.getElementById('menu');
if (menu) {
    menu.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
}