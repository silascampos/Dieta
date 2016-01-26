<?php
//error_reporting(E_ALL ^ E_NOTICE);
  require_once("mostra-alerta.php"); ?>
<html>
<head>
	<meta charset="utf-8">
	<title>Minha Loja</title>
	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/loja.css" rel="stylesheet">
        <script src="js/jquery.js"></script>
</head>
<body>
	
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="index.php">Dieta</a>
			</div>
			<div>
				<ul class="nav navbar-nav">
					<li><a href="cadastra-dieta.php">Adiciona Dieta</a></li>
                                        <li><a href="listaPacientes.php">Lista de Pacientes</a></li>
					<li><a href="contato.php">Contato</a></li>
				</ul>
			</div>
		</div>
	</div>
	
	
	<div class="container">
		<div class="principal">
		    <?php  mostraAlerta("success"); ?>
		    <?php mostraAlerta("danger"); ?>
			