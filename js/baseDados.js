let chaves = Object.keys(localStorage);

for (let i = 0; i < chaves.length; i++) {
    let valor = JSON.parse(localStorage.getItem(chaves[i]));
    let tabelaTR = document.createElement('tr')
    
    let nomeTD = document.createElement('td')
    nomeTD.innerText = valor.nome;

    let quartosTD = document.createElement('td');
    quartosTD.innerText = valor.quartos;

    let banheirosTD = document.createElement('td');
    banheirosTD.innerText = valor.banheiros;

    let garagemTD = document.createElement('td');
    if(valor.garagem === 'sim') {
        garagemTD.innerText = 'Sim'
    } else if (valor.garagem === 'nao') {
        garagemTD.innerText = 'Não'
    }

    tabelaTR.appendChild(nomeTD);
    tabelaTR.appendChild(quartosTD);
    tabelaTR.appendChild(banheirosTD);
    tabelaTR.appendChild(garagemTD);

    let tabelaIndex = document.getElementById('tabela');
    tabelaIndex.append(tabelaTR)
}