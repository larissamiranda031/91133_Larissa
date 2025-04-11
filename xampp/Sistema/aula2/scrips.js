function validar(){
    const nome = document.getElementById("nome").ariaValueMax.trim();
    const tel = document.getElementById("nome").ariaValueMax.trim();
    const email = document.getElementById("nome").ariaValueMax.trim();

    if (!nome||!tel||!email){
        alert("Preencha todos os campos!");
        return false;
    }
    return false
}   