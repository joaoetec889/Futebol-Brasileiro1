// Mostra uma curiosidade quando o visitante clica no botão.
function mostrarCuriosidade() {
    const texto = document.getElementById("curiosidade");
    texto.textContent = "O Brasil é o único país que participou de todas as edições da Copa do Mundo masculina até 2022.";
}

// Mostra uma mensagem quando o formulário é enviado.
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    // Impede que a página seja recarregada.
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const time = document.getElementById("time").value;
    const resposta = document.getElementById("resposta");

    resposta.textContent = "Obrigado, " + nome + "! Seu time favorito é " + time + ".";

    // Limpa os campos depois do envio.
    formulario.reset();
});
