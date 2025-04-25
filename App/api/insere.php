<?php
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("location: http://localhost:8081/app/index.html");
    exit;
}

$produto = $_POST['Produto'];
$tipo = $_POST['Tipo'];
$quantidade = $_POST['Quantidade'];

$sql = "INSERT INTO produtos (produto, tipo, quantadade) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi",$produto, $tipo, $quantidade);

$stmt->execute();
$stmt->close();

?>