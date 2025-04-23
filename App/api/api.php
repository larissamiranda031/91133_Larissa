<?php

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("location: http://localhost/app/index.html");
    exit;
}

include 'autenticar.php';

include 'conexao.php';

include 'uinsere.php';

include '/view/conecta.php';

echo "<script>
    alert(\"Cadastro realizado com sucesso!\");
    window.location.href = 'http://localhost/app/index.html';
    </script>";
?>    