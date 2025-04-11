<?php
$host = "localhost";
$user = "root";
$pass = "";

$nome = $_POST["nome"];
$email = $_POST["email"];
$tel = $_POST["telefone"];

$conn = mysqli_connect("localhost","root", "", "contatos")

$sql = "INSERT INTO contatos (nome, telefone, email)VALUES
('$nome', '$tel','$email')";
if (mysqli_query($conn, $sql)){
 echo "<script>alert('Cadastro realizado!'); window.location.href='cad_usuario.html';</script>";
}else{
echo"Erro ao cadastrar...."    
}

mysqli_query($conn);

$stmt->close();
$conn->close();

?>
