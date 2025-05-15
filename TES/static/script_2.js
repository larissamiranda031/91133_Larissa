// Função de Adicionar
function adicionaramigo() {
    const nome = document.getElementById('nome').value;
    if (nome.trim() === '') return;
  
    fetch('/api/adicionar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: nome })
    })
    .then(res => res.json())
    .then(() => {
      document.getElementById('nome').value = '';
      carregarLista();
    });
  }
  
  function carregarLista() {
    fetch('/api/listar')
      .then(res => res.json())
      .then(amigos => {
        const lista = document.getElementById('lista-amigos');
        lista.innerHTML = '';
        amigos.forEach(nome => {
          const item = document.createElement('li');
          item.textContent = nome;
          lista.appendChild(item);
        });
      });
  }
  
  window.onload = carregarLista;

// Função de Excluir  
  function carregarParaExcluir() {
    fetch('/api/listar')
      .then(res => res.json())
      .then(amigos => {
        const lista = document.getElementById('lista-exclusao');
        lista.innerHTML = '';
        amigos.forEach(nome => {
          const item = document.createElement('li');
          item.innerHTML = `${nome} <button onclick="excluirAmigo('${nome}')">Excluir</button>`;
          lista.appendChild(item);
        });
      });
  }
  
  function excluirAmigo(nome) {
    fetch('/api/excluir', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: nome })
    })
    .then(res => res.json())
    .then(() => carregarParaExcluir());
  }
  
  window.onload = carregarParaExcluir;
  

