import { prompt } from "./pack.js";
import { adicionarContato } from "./funçõesContato/adicionarContato.js";
import { listarContatos } from "./funçõesContato/listarContatos.js";
import { atualizarContato } from "./funçõesContato/atualizarContato.js";

export let contatos = [];

export function exibirMenu(){
    console.clear();
    console.log("=".repeat(20) + "CONTATOS" + "=".repeat(20));
    console.log(
          "Bem-vindo(a) ao Gerenciador de Contatos\n"
        + "Digite o número de acordo com o que deseja:\n"
        + "1 - Adicionar Contato --------------------\n"
        + "2 - Listar Contatos ----------------------\n"
        + "3 - Editar Contato -----------------------\n"
        + "4 - Remover Contato ----------------------\n"
        + "5 - SAIR ---------------------------------\n"
        + "=".repeat(48));
    let opMenu = prompt("> ");
    opMenu = parseInt(opMenu);
    switch(opMenu){
        case 1:
            adicionarContato();
            break;
        case 2:
            listarContatos();
            break;
        case 3:
            atualizarContato();
            break;
        case 4:
            removerContato();
            break;
        case 5:
            console.clear();
            console.log(".\n.\n.")
            process.exit();
            break;
        default:
            console.log("Digite um número válido.");
            exibirMenu();
            return;
    }
}
exibirMenu();