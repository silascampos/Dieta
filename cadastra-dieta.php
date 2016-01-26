<?php require_once("cabecalho.php"); 
require_once("banco-categoria.php");
//require_once("logica-usuario.php");
require_once("class/Paciente.php");
require_once("class/Dieta.php");
require_once("class/DietaDAO.php");
require_once("horaFunc.php");

    date_default_timezone_set('America/Recife');

//verificaUsuario();


?>		
	<h1>Cadastra Dieta</h1>	
        <div id="mensagem" title="Título da mensagem" style="display:none"> 
            <p>Aqui fica o conteúdo da mensagem.</p> 
        </div>       
        <div class="meio">
           <?php 
            $hora = 22;
            $data = date('m/d/Y h:i:s');
            $date = new DateTime($data);
            $date->add(new DateInterval('PT'.$hora.'H'));
            $data_proxima = $date->format('d/m/Y H:i:s') . "\n";
            
            echo $data_proxima;
           
            ?>
            <form action="actionDieta.php" method="post"> 
            <input id="data_prox" type="hidden" value="<?php echo $data_proxima; ?>">    
            <div class="row">
                <div id="form-registro" class="col-xs-12 col-sm-3"><p>Registro: </p><input id="regis" class="imput-form-registro" type="text" name="registro" ></div>
                <div id="form-nome" class="col-xs-12 col-sm-5"><p>Nome:</p> <input class="imput-form-nome" type="text" name="nome" ></div>
                <div id="form-leito" class="col-xs-12 col-sm-2"><p>Leito:</p> <input class="imput-form-registro" type="text" name="leito" ></div>
                <div id="form-sexo" class="col-xs-12 col-sm-2"><p>Sexo:</p>
                      <select id="sel_sexo" name="sexo" class="imput-form-sexo">
                        <option value="Masculino">MASC</option>
                        <option value="Feminino">FEMI</option>
                        </select> 

                </div>
            </div>
            <br>
            <div class="row">
                <div id="form-idade" class="col-xs-12 col-sm-3"><p>Idade: </p><input id="inp-form-idade" class="imput-form-registro" type="number" name="idade" ></div>
                <div id="form-altura" class="col-xs-12 col-sm-3"><p>Altura(cm): </p> <input id="inp-form-altura" class="imput-form-altura" type="number" name="altura" ></div>
                <div id="form-peso" class="col-xs-12 col-sm-3"><p>Peso(kg): </p> <input  id="inp-form-peso" class="imput-form-registro" type="number" name="peso" ></div>
                <div id="form-dieta" class="col-xs-12 col-sm-3"><p>Dieta:</p> 
                       <select name="dieta" class="imput-form-dieta">
                           <?php 
                            $dietas = getDieta($conexao);
                            foreach($dietas as $dieta) :
                           
                           ?>
                        <option value="<?=$dieta->codigo ?>"><?=$dieta->nome ?></option>
                        <?php 
                    endforeach
                        ?>
                        </select>
                </div>
            </div>
            <br>
            <div class="row">
               <div id="form-diag" class="col-xs-12 col-sm-6"><p>Diagnóstico: </p><input class="imput-form-diag" type="text" name="diag" value=""></div>         
               <div id="form-diag-nutri" class="col-xs-12 col-sm-6"><p>Diagnóstico Nutricional: </p><input class="imput-form-diag" type="text" name="diag_nutricional" >            </div>
            </div>
            <br>
            <div class="row">
                <div id="form-fator-inju"class="col-xs-12 col-sm-3"><p>Fat. Injúria: </p><input id="inp-form-inj" class="imput-form-inju" type="number" name="fat_injuria" ></div>
                <div id="form-fator-term"class="col-xs-12 col-sm-3"><p>Fat. Térmico: </p><input id="inp-form-ter" class="imput-form-term" type="number" name="fat_termico" ></div>
                <div id="form-fator-ativ"class="col-xs-12 col-sm-3"><p>Fat. Atividade: </p><input id="inp-form-atv" class="imput-form-ativ" type="number" name="fat_atividade" ></div>
                <div id="form-fator-kcal"class="col-xs-12 col-sm-3"><p>Fat. Kcal: </p><input id="inp-form-kca" class="imput-form-kcal" type="number" name="fat_kcal" ></div>
            </div>
            <br>
            <div class="row">
                    <div id="form-fator-vet"class="col-xs-12 col-sm-3"><p>VET : </p><input id="id-imput-form-vet"  class="imput-form-vet" type="number" name="vet" >
                    <button id="btn_vet" type="button" class="btn btn-primary" title="Atualizar VET">
                    <span class="glyphicon glyphicon-refresh"></span></button>
                </div>
                <div id="form-fator-vet-pratico"class="col-xs-12 col-sm-3"><p>VET Prático : </p><input id="id-form-vet-pratico" class="imput-form-vet-pratico" type="number" name="vet-pratico" ></div>
                <div id="form-fator-volume"class="col-xs-12 col-sm-3"><p>Volume : </p><input id="id-form-volume"class="imput-form-volume" type="number" name="volume" ></div>
                <div id="form-tempo"class="col-xs-12 col-sm-3"><p>Tempo(h) : </p><input id="id-form-tempo"class="imput-form-tempo" type="number" name="tempo" ></div>
                
            </div>  
            <br>
            <br>
            <div class="row">
                   
                <div id="form-fator-ml-h"class="col-xs-12 col-sm-4"><p>ml/h : </p><input id="id-form-ml-h" class="imput-form-ml-h" type="number" name="ml_h" ></div>
                <div id="form-proxima-dieta"class="col-xs-12 col-sm-4"><p>Próx. Dieta : </p><input id="id-proxima-dieta" class="imput-proxima-dieta" type="text" name="proxima" value="" ></div>
            </div>
            <div class="row">
                <div id="from-botao"class="col-xs-12">
                    <input class="botao btn btn-primary" type="submit">
                    <br>
                    
                </div>
            </div> 
            </form>
            <input id="teste" type="button" value="teste    ">
            <h2 id="bt-h2"></h2>
        </div>    
<?php include("rodape.php"); ?>			
