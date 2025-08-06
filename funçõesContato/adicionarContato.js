import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";

export function adicionarContato(){
    console.clear();
    console.log("-".repeat(20) + "ADICIONE UM NOVO CONTATO" + "-".repeat(20));
    var nome = prompt("Nome: ");
    var telefone = prompt('Telefone (com DDD): ');
    if(isNaN(telefone) || telefone.length < 11){
        console.log("O TELEFONE deve conter APENAS números e ter um TAMANHO válido.")
        prompt("Retorne ao MENU... (ENTER)");
        exibirMenu();
    }
    const telefoneFormatado = "(" + telefone.substring(0,2) + ")" + telefone.substring(2,7) + "-" + telefone.substring(7);
    var email = prompt('E-mail: ');
    const contato = {
        ID: contatos.length + 1,
        nome: nome,
        telefone: telefoneFormatado,
        email: email,
    };
    contatos.push(contato);
    console.clear()
    console.log("-".repeat(80));
    console.log(`CONTATO: ${nome}, de TELEFONE: ${telefoneFormatado} e EMAIL: '${email}' adicionado com sucesso !`);
    console.log("-".repeat(80));
    prompt("Pressione ENTER para voltar ao MENU...\n> ");
    exibirMenu();
}
