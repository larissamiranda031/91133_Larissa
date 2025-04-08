document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); //impede o envio do fomulario
    
    //obter o valor do elemento
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // validação dos campos
    if(!username||!password){
        alert("por favor, preencha todos os campos.");
        return;
    }
    
    if(password.length < 8){
        alert("A senha deve ter pelo menos 8 caractereres.");
        return;
    }
    
    //salva o nome do usuario no localStorage
    localStorage.setItem("username", username);
    
    // se a validação passar, abre o painel
    window.location.href = "painel.html";//abre uma nova pagina chamada
    alert("Login bem sucedido!");//pop-up de sucesso
    });