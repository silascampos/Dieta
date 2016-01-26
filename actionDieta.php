<?php require_once("cabecalho.php");
 require_once ("./conecta.php");
require_once("class/dietaDAO.php");
require_once("class/Paciente.php");

//verificaUsuario();



    $paciente = new Paciente();

    $paciente->fat_injuria = $_POST['fat_injuria'];
    $paciente->fat_termico = $_POST['fat_termico'];
    $paciente->fat_atividade = $_POST['fat_atividade'];
    $paciente->fat_kcal = $_POST['fat_kcal'];
    $paciente->vet = $_POST['vet'];
    $paciente->vet_pratico = $_POST['vet-pratico'];
    $paciente->volume = $_POST['volume'];
    $paciente->ml_h = $_POST['ml_h'];
    $paciente->registro = $_POST['registro'];    
    $paciente->nome = $_POST['nome'];
    $paciente->dieta_cod = $_POST['dieta'];
    $paciente->ativo = 1;
    $paciente->leito = $_POST['leito'];
    $paciente->sexo = $_POST['sexo'];
    $paciente->idade = $_POST['idade'];
    $paciente->altura = $_POST['altura'];
    $paciente->peso = $_POST['peso'];
    $paciente->diag = $_POST['diag'];
    $paciente->diag_nutricional = $_POST['diag_nutricional'];
    $paciente->hora_atendimento = '11:30';
    $paciente->hora_proxima = '13:30';

    if( insereDieta($conexao, $paciente)) { ?>
    
       <p class="text-success"> ADICIONADO</p>
       <?php } else {
        $msg = mysqli_error($conexao);
        ?>
        <p class="text-danger"> ERRO <?= $msg ?></p>
        <?php 
            }   
        ?>
    }