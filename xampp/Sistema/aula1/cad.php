<?php
//configuração do banco de dados
$host = "localhost";
$user = "root";
$pass = ""; // senha do SQL (alterar se necessário)
$dbname = "cadastro_produtos";

//conexão com o banco
$conn = new mysqli($host, $user, $pass, $dbname);

if($conn->connect_error){
    die("conexão falhou:" .$conn->connect_error);
}

$produto = trim($_POST['produto']??'');
$preco = floatval($_POST['preco']?? 0);
$quantidade = intval($_POST['quantidade']?? 0);
$total = floatval($_POST['total']?? 0);

if($produto===""|| $preco <= 0||$quantidade <=0){
    echo "dados invalidos";
    exit;
}

$stmt = $conn -> prepare("INSERT INTO produtos(produto, preco, quantidade, total)
VALUES(?, ?, ?, ?)");
$stmt -> bind_param("sddi", $produto, $preco, $quantidade, $total);

if ($stmt-> execute()){
    echo "Cadastro realizado com sucesso!";
}else{
    echo "Erro ao cadastrar: " .$stmt->error;
}

$stmt->close();
$conn->close();

header("location: cad.html");

/*
echo("conectado!");
*/
?>
