document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); //impede o envio do fomulario
    
    //obter o valor do elemento
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // validação dos campos
    if(username){
        document.getElementById("userWelcome").textContent = `Bem-Vindo, ${username}!`;
   } else {
    document.getElementById("userWelcome").textContent = " Nome de usuário não encontrado";
   }
    
    if(password.length < 8){
        alert("A senha deve ter pelo menos 8 caractereres.");
        return;
    }
    
    //salva o nome do usuario no localStorage
    localStorage.setItem("username", username);
    
    // se a validação passar, abre o painel
    window.location.href = "cadastro.html";//abre uma nova pagina chamada
    alert("Login bem sucedido!");//pop-up de sucesso
    });

    /*<script>
    // Recupera o nome do usuário do localstorage 
    const username = localStorage.getItem("username");
    const password = document.getElementById("password").value;
     
    // se o nome do usuario estiver armazenado 
    if(username){
        document.getElementById("userWelcome").textContent = `Bem-Vindo, ${username}!`;
   } else {
    document.getElementById("userWelcome").textContent = " Nome de usuário não encontrado";
   }

   //função para sair (destruir a sessão e voltar para o login)
   document.getElementById(logoutBtn).addEventListener("click", function(){
    
    // remove o nome de usuário do localstorage
    localStorage.removeItem("username");

    //Redireciona o usuário de volta para a página de Login
    window.location.href = "index.html";//Alterar para o caminho correto do seu login
   });
</script>
</body>
</html>*/