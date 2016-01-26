<?php

 require_once("Paciente.php");
 require_once("Dieta.php");


   

function insereDieta($conexao, Paciente $paciente ) {
    
    $query = "INSERT INTO paciente (pac_registro, pac_nome, pac_leito, pac_idade,pac_altura, pac_sex, pac_peso, Dieta_dieta_codigo, pac_ativo, pac_hora_atentimento, pac_diag, pac_diag_nutricional, fat_injuria, fat_termico, fat_atividade, fat_kcal, vet, vet_pratico, volume, hora_atual, hora_proxima, ml_h) VALUES "
            . "($paciente->registro, '{$paciente->nome}', '{$paciente->leito}', $paciente->idade, $paciente->altura, '{$paciente->sexo}', $paciente->peso, $paciente->dieta_cod, $paciente->ativo, '{$paciente->hora_atendimento}', '{$paciente->diag}', '{$paciente->diag_nutricional}', $paciente->fat_injuria, $paciente->fat_termico, $paciente->fat_atividade, $paciente->fat_kcal, $paciente->vet, $paciente->vet_pratico, $paciente->volume, '{$paciente->hora_atendimento}', '{$paciente->hora_proxima}', $paciente->ml_h)";
        
        
    return mysqli_query($conexao, $query);    
}



function getDieta($conexao){
    
    
    $query ="select * from dieta";
    $dietas = [];
    $resultado = mysqli_query($conexao, $query);
    
    while($dietaAtual = mysqli_fetch_assoc($resultado)){    
    $dieta = new Dieta(); 
    $dieta->codigo = $dietaAtual['dieta_codigo'];
    $dieta->nome = $dietaAtual['dieta_nome'];
    $dieta->densidade = $dietaAtual['dieta_densidade'];    
        
       
    array_push($dietas, $dieta);    
    }
    
    return $dietas;
    
    
}

function listaPacientes($conexao){
    
    $query = "select * from paciente where pac_ativo = 1 ";
    
    $pacientes = array();
    
    $resultado = mysqli_query($conexao, $query);
    
    while($pacienteAtual = mysqli_fetch_assoc($resultado)){
        $paciente = new Paciente;
        $paciente->registro = $pacienteAtual['pac_registro'];
        $paciente->nome = $pacienteAtual['pac_nome'];
        $paciente->peso = $pacienteAtual['pac_peso'];
        
        array_push($pacientes, $paciente);
        
    }
    
    return $pacientes;
    
}
