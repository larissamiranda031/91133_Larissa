// Função para capturar o submit do formulário
function calcular() {

    // Obter os valores dos elementos do formulário
    const produto = document.getElementById("produto").value;
    let preço = parseFloat(document.getElementById("preço").value) || 0;// Se estiver vazio, considera 0
    let quantidade = parseInt(document.getElementById("preço").value) || 0; // Se estiver vazio, considera 0

    let total = preço * quantidade;

    document.getElementById('total').innerText = 'Total: R$ ' + total.toFixed(2);

};
calcular();
