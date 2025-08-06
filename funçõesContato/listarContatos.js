import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";
import { adicionarContato } from "./adicionarContato.js";

export function listarContatos() {
    console.clear();
    if(contatos.length <= 0){
        console.log("Você não tem contatos adicionados para listar.")
        prompt("\nRetorne ao MENU... (ENTER)");
        exibirMenu();
    }
    console.log("=".repeat(50) + "LISTA DE CONTATOS" + "=".repeat(50))
    console.log("Contatos salvos: " + contatos.length)
    contatos.forEach(contato => {
    console.log(`ID - ${contato.ID} || [ Nome: ${contato.nome} ] | [ Telefone: ${contato.telefone} ] | [ Email: ${contato.email} ]`);
} );
    prompt("Pressione ENTER para retornar ao MENU...\n> ");
    exibirMenu();
    }