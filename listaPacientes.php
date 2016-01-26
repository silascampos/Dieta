<?php require_once("cabecalho.php"); 
require_once("banco-categoria.php");
//require_once("logica-usuario.php");
require_once("class/Paciente.php");
require_once("class/Dieta.php");
require_once("class/DietaDAO.php");

//verificaUsuario();

?>			
	<h2>Lista de Pacientes</h2>
        <table class="table table-bordered table-responsive table-striped">
            <?php 
                $pacientes = listaPacientes($conexao);
                foreach($pacientes as $paciente) :                    
            
            ?>
            <thead>
            <tr>
                <td>Registro</td>
                <td>Nome</td>
                <td>Peso</td>                
            </tr>
            </thead>
            <tr>
                <td><?= $paciente->registro ?></td>
                <td><?= $paciente->nome ?></td>
                <td><?= $paciente->peso ?></td>
            </tr>
            <?php 
                endforeach
            ?>
            
            
        </table>    
	
<?php include("rodape.php"); ?>			
