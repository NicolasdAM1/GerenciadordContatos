import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";

export function atualizarContato(){
    console.clear();
    if(contatos.length <= 0){
        console.log("Você não tem contatos adicionados para editar.")
        prompt("\nRetorne ao MENU... (ENTER)");
        exibirMenu();
    }
    console.log("=".repeat(50) + "LISTA DE CONTATOS" + "=".repeat(50))
    console.log("Contatos salvos: " + contatos.length)
    contatos.forEach(contato => {
        console.log(`ID - ${contato.ID} || [ Nome: ${contato.nome} ] | [ Telefone: ${contato.telefone} ] | [ Email: ${contato.email} ]`);
    });
    const IDAtt = parseInt(prompt("Digite o ID do contato que deseja atualizar:\n> ", 10));
    if(isNaN(IDAtt) || IDAtt <= 0 || IDAtt > contatos.length){
        console.clear();
        console.log("Inválido. Nenhum contato encontrado para o ID digitado.");
        prompt("Retorne ao MENU... (ENTER)");
        exibirMenu();
    }
    const IDEdit = IDAtt - 1;
    const contatoAtual = contatos[IDEdit];

    console.clear();
    console.log("=".repeat(50) + " EDIÇÃO DE CONTATO " + "=".repeat(50));
    console.log(`ID Atual - ${contatoAtual.ID}`)
    console.log(`[ Nome atual: ${contatoAtual.nome} ]`);
    console.log("Digite o novo nome atualizado (deixe em branco para manter o mesmo): ");
    let nomeAtualizado = prompt("> ");
    if(nomeAtualizado.trim() !== ""){
        contatoAtual.nome = nomeAtualizado;
    }
    console.log(`[ Telefone atual: ${contatoAtual.telefone} ]`);
    console.log("Digite o novo número - com DDD - (deixe em branco para manter o mesmo): ");
    let telefoneAtualizado = prompt("> ");
    if(telefoneAtualizado.trim() !== ""){
        if(isNaN(telefoneAtualizado) || telefoneAtualizado.length < 8 || telefoneAtualizado.length > 11){
            console.log("O TELEFONE deve conter APENAS números e ter um tamanho válido.")
            prompt("Retorne ao MENU... (ENTER)");
            return exibirMenu();
        }
        const telefoneAtualizadoFormatado = "(" + telefoneAtualizado.substring(0,2) + ")" + telefoneAtualizado.substring(2,7) + "-" + telefoneAtualizado.substring(7);
        contatoAtual.telefone = telefoneAtualizadoFormatado;
    }
    console.log(`[ Email atual: ${contatoAtual.email} ]`);
    console.log("Digite o novo email (deixe em branco para manter): ");
    let emailAtualizado = prompt("> ");
    if(emailAtualizado.trim() !== ""){
        contatoAtual.email = emailAtualizado;
    }
    console.clear();
    console.log("-".repeat(50) + "CONTATO ATUALIZADO" + "-".repeat(50));
    console.log(`ID - ${contatoAtual.ID} || [ Nome: ${contatoAtual.nome} ] | [ Telefone: ${contatoAtual.telefone} ] | [ Email: ${contatoAtual.email} ]`)
    prompt("Pressione ENTER para retornar ao MENU...\n> ");
    exibirMenu();

}