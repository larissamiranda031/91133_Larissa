function validarLogin(){
    let u = document.forms[0].usuario.value;
    let s = document.forms[0].usuario.value;

    if (u.trim()===""){
        alert("Preencha todos os campos.");
        return false;
    }
    return false;
}