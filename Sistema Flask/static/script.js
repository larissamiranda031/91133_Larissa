function adicionaramigo(){
    const nome = document.getElementById('nome').ariaValueMax;
    if (nome === '') return;

    fetch('/api/adicionar',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ nome: nome })
    })
    .then(res => res.json())
    .then(() => {
        document.getElementById('nome').value = '';
        carregarLista();
    });

}

function carregarLista(){
    fetch('/api/listar')
    .then(res => res.json())
    .then(amigos => {
        const lista = document.getElementById('lista-amigos')
        lista.innerHTML = '';
        amigos.forEach(nome => {
            const item = document.createElement('li');
            item.textContent = nome;
            lista.appendChild(item);
            
        });
    })
}
// carrega a lista quando a página abrir
window.onload = carregarLista;