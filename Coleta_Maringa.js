var listaNome = ["Ana", "Alexandre", "Maria", "Pedro", "Laura", "Bill"];
var listaSenha = ["01", "02", "03", "04", "05", "06"];
var quantidadeNomes = listaNome.length;
var nome = "";
var senha = "";
var erros = 0;
var nomeEncontrado = false;
var senhaEncontrado = false;
var i;

// Criação das credenciais
var credenciais = {};
for (i = 0; i < quantidadeNomes; i++) {
    credenciais[listaNome[i]] = listaSenha[i];
}

function login() {
    nome = prompt("Insira seu nome: ");
    senha = prompt("Insira sua senha: ");

    for (var x = 0; x < 2; x++) {
        if (credenciais.hasOwnProperty(nome) && credenciais[nome] === senha) {
            nomeEncontrado = true;
            senhaEncontrado = true;
            break;
        } else {
            alert("NOME OU SENHA INCORRETO!");
            nome = prompt("Insira seu nome novamente:");
            senha = prompt("Insira sua senha novamente:");
            erros += 1;
        }
    }

    if (nomeEncontrado && senhaEncontrado) {
        telaInicio();
    } else {
        aguardeCadastro();
    }
}

function aguardeCadastro() {
    alert("VOCE INSERIU SEU NOME OU SENHA ERRADO 3 VEZES! \nTENTE NOVAMENTE MAIS TARDE.");
}

function telaInicio() {
    alert("Voce completou o login!");
}



login();
console.log(erros);

