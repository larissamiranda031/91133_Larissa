// public/script.js

// Ao enviar o formulário
document.getElementById("form").addEventListener("submit", async function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").ariaValueMax;
    
    // Envia o nome para o servidor
    await fetch("/cadastrar",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome })
    });

    document.getElementById("nome").value = "";
    carregarPessoas();
});

// Carrega a lista de pesssoas
async function carregarPessoas() {
    const resposta = await fetch("/lista");
    const pessoas = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    pessoas.forEach(pessoa => {
        const li = document.createElement("li");
        li.textContent =pessoa.nome;
        lista.appendChild(li);
        
    });
}

// carrega ao abrir
carregarPessoas();