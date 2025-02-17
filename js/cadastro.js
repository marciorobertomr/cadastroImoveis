let sair = false;

// Remove todos os acentos, espaços e deixa em minúsculo
function tratarNome(nome) {
    return nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();
}

let enviarDados = document.getElementById('enviar');
enviarDados.addEventListener('click', (event) => {

    event.preventDefault();

    let nomeInput = document.getElementById('nome');
    let quartosInput = document.getElementById('quartos');
    let banheirosInput = document.getElementById('banheiros');
    let garagemInput = document.getElementsByName('garagem');

    let nome = nomeInput.value;
    let quartos = quartosInput.value;
    let banheiros = banheirosInput.value;
    let garagem = '';

    if (nome === '' || quartos === '' || banheiros === '') {
        alert('Preencha todos os campos.');
        return;
    };

    let nomeIndice = tratarNome(nome);
    
    // console.log(garagemInput);
    garagemInput.forEach((elemento) => {
        if(elemento.checked === true) {
            garagem = elemento.defaultValue;
        }
    })

    let chaves = Object.keys(localStorage);
    let existe = chaves.includes(nomeIndice);
    
    if (!existe) {
        let imovel = {
            nome: nome,
            quartos: quartos,
            banheiros: banheiros,
            garagem: garagem
        }
    
        localStorage.setItem(nomeIndice, JSON.stringify(imovel));
    } else {
        alert('Imóvel já cadastrado. Por gentileza, cadastre um novo.')
    }

    // let teste = JSON.parse(localStorage.getItem(nomeIndice));
    // console.log(teste);
    
})
