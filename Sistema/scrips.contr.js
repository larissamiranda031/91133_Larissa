// Função para capturar o submit do formulário
document.getElementById("loginForm").addEventListener("submit", function(event){
event.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos elementos do formulário
    const produto = document.getElementById("produto").value;
    const preço = document.getElementById("preço").value;
    const quantidade = document.getElementById("quantidade").value;
    const total = document.getElementById("total").value;

    // Validação dos campos
    if(!produto || !preço || !quantidade || !total) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exemplo de validação do preço (não pode ser vazio ou negativo)
    if(isNaN(preço) || parseFloat(preço) <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    // Salva os dados no localStorage (se for necessário salvar no localStorage)
    localStorage.setItem("produto", produto);
    localStorage.setItem("preço", preço);
    localStorage.setItem("quantidade", quantidade);
    localStorage.setItem("total", total);

    // Se a validação passar, redireciona para outra página
    window.location.href = "painel.html"; // Abre uma nova página chamada "painel.html"
    alert("Cadastro bem-sucedido!"); // Pop-up de sucesso
});