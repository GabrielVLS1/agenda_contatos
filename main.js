const form = document.querySelector('#form-contatos');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNome = document.querySelector('#nome');
    const inputTel = document.querySelector('#telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome "${inputNome.value}" já foi adicionado aos contatos`);
    } else if (telefones.includes(inputTel.value)){
        alert(`O telefone "${inputTel.value}" já foi adicionado aos contatos`);
    } else if (inputNome.value.length > 50)  {
        alert(`O nome digitado é muito grande`);
    } else if (inputTel.value.length > 20)  {
        alert(`O número digitado é muito grande`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTel.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNome.value = '';
        inputTel.value = '';
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


