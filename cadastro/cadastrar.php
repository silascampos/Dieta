<?php

// ******************************************************** //
//                            					//
//  Nome: Éder Josué Chagas                  			//
//  homepage: http://www.dcc.ufmg.br/~ejchagas        	//
//  E-mail: ejchagas@dcc.ufmg.br             			//
//                            					//
//          Script: Cadastro de Pessoas        			//
//                            					//
//    Breve descrição: Script simples em php, que utiliza   //
// apenas arquivos para gravar as pessoas cadastradas.      //
// 					                              //
//    Para fazer o seu script funcionar basta  dar um       //
// chmod 766 nos arquivos que gravam os dados.              //
//                            					//
// ******************************************************** //

function verifica_mail($mail)
{
    if (strpos ($mail, "@") == 0)
    {
        return true;
    }

    list($user,$domain)=split("@",$mail,2);

    if (checkdnsrr($domain,"MX"))
    {
         return false;
    }
    else
    {
         return true;
    }
}

if($tela == "2")
{
    $n_erros = 0;
    $erro = "  ";

    if(empty($email))
    {
       $erro.= "Obrigatório digitar o e-mail.<br>";
       $n_erros++;
    }
    elseif (verifica_mail($email))
    {
       $erro.= "Confira o e-mail e tente novamente.<br>";
       $n_erros++;
    }


    if(empty($nome))
    {
       $erro.= "Obrigatório digitar o nome.<br>";
       $n_erros++;
    }
}//if($tela==2)

//if (!empty($nome))

if($tela == 2 and $n_erros == 0)
{
     $tamanho = filesize("cadastro.php");
     if($tamanho < 1)
     {
          $fp = fopen("cadastro.php", "r+"); // abre o arquivo para escrita
     }
     else
     {
          $fp = fopen("cadastro.php", "a+"); // abre o arquivo para escrita
     }
     $cadastro ="Nome=$nome\n";
     $cadastro.="E-mail=$email\n";
     fputs($fp, $cadastro); //envia o cadastro
     fclose($fp); // fecha o arquivo

     $tamanho = filesize("email.php");
     if($tamanho < 1)
     {
          $fp = fopen("email.php", "r+"); // abre o arquivo para escrita
          fseek($fp,0);
          $cadastro ="$email";
     }
     else
     {
          $fp = fopen("email.php", "a+"); // abre o arquivo para escrita
          $cadastro =",$email";
     }
     
     fputs($fp, $cadastro); //envia o cadastro
     fclose($fp); // fecha o arquivo
?>
<HTML>
<HEAD>
      <TITLE>CADASTRO</TITLE></HEAD>
<BODY BGCOLOR=F7C473>
<FONT SIZE=2 FACE="Verdana">

<FONT COLOR="DA251D">
<B>CADASTRO
</FONT>
<BR>
<p align="justify">
 O CADASTRO FOI FEITO CORRETAMENTE.
</p>
<form>
  <input type="button" value="Fechar Janela" onClick="self.close()">
</form>
</BODY>
</HTML>
<?php
}
else
{
?>
<HTML>
<HEAD>
      <TITLE>CADASTRO</TITLE></HEAD>
<BODY BGCOLOR=F7C473>
<FONT SIZE=2 FACE="Verdana">

<FONT COLOR="DA251D">
<B>CADASTRO
</FONT>
<BR>
<p align="justify">
CADASTRE-SE E RECEBA NOVIDADES POR E-MAIL.
</P>
</B>
<P>
<form method=post action="cadastrar.php">
Nome <BR><input type="text "name="nome" SIZE=38><BR>
E-mail <BR><input type="text" name="email" size=38><BR>
<input type="hidden" name="tela" value="2">
<P>
<INPUT TYPE="submit" VALUE="Enviar">
<INPUT TYPE="reset" VALUE="Apagar">
</form>
<br>
<?php echo "<font color=red>$erro</font>"; ?>
</BODY>
</HTML>
<?php
}
?>
