var botao = document.querySelector("#registrar")
botao.addEventListener("click",enviarMensagem)

var nome_ref = document.querySelector("#nome")
nome_ref.addEventListener

var tipo_ref = document.querySelector("#tipo")
tipo_ref.addEventListener

var nivel_ref = document.querySelector("#nivel")
nivel_ref.addEventListener

var descricao_ref = document.querySelector("#descricao")
descricao_ref.addEventListener


function enviarMensagem() {
var template = document.querySelector("#modelo");
var copia = document.importNode(template.content, true);

copia.querySelector(".nivel_pokemon").innerHTML = "Nivel: " + nivel_ref.value;
copia.querySelector(".tipo_pokemon").innerHTML = "Tipo: " + tipo_ref.value;
copia.querySelector(".nome_pokemon").innerHTML = "Nome: " + nome_ref.value;
copia.querySelector(".descricao_pokemon").innerHTML = "Descrição: " + descricao_ref.value;
document.body.appendChild(copia);
}