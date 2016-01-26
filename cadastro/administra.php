<?php

//
// arquivos a serem abertos
//
$file_cad = "cadastro.php";
$file_email = "email.php";

//
// password do administrador
//
$password="123456";

//
// se o password está errado ou ainda não foi digitado
//
if(!isset($passwd) or $passwd!=$password)
	{
?>
<html>
<head>
<title>Administração das Pessoas Cadastradas</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

	<table width="303" border="0" cellspacing="1"
  		cellpadding="0" height="169" bgcolor="#336699"
     	align="center">

      <tr>
        <td bgcolor="#336699" height="110">
    		<table width="311" border="0" cellspacing="1"
            	cellpadding="0" bgcolor="#EEEDEA" height="136">
               <tr>
                 <td height="175">
                   <div align="center">
                   <font face="Verdana, Arial, Helvetica, sans-serif">
                   <b>
                   <font size="2">
                   		Entre com o password do administrador!
                   </font></b></font><br>
		           </div>
     <form name="form1" method="post" action="administra.php">
      <div align="center">
		<input type="password" name="passwd"><br>
        <input type="submit" name="Submit" value="Entrar">
      </div>
    </form>
                 </td>
                </tr>
            </table>
       </td>
      </tr>
    </table>
</html>
<?php
	} // fim do if

//
// se o password digitado for correto
//
elseif ($passwd==$password)
	{

	//
	// se o password esta correto e foi submetido as novas configurações
	//
	if (isset($submit))
	{
		$fp=fopen("cadastro.php", "w"); // abre arquivo para escrita
		for($i=0; $i < $contador; $i++)
		{
			$aux = $i + 1;
			if($nome[$aux]!="" and $email[$aux]!="") //se o campo não está vazio
			{
	     			$cadastro ="Nome=$nome[$aux]\n";
			      $cadastro.="E-mail=$email[$aux]\n";
			      fputs($fp, $cadastro); //envia o cadastro
			}
		}
		fclose($fp); // fecha o arquivo

		$fp=fopen("email.php", "w"); // abre arquivo para escrita
		$aux_email = 0;
		for($i=0; $i < $contador; $i++)
		{
			$aux = $i + 1;
			if($nome[$aux]!="" and $email[$aux]!="") //se o campo não está vazio
			{
				if($aux_email == 0)
				{
			      	$cadastro ="$email[$aux]";
					$aux_email++;
				}
				else
				{
			      	$cadastro =",$email[$aux]";
				}
			      fputs($fp, $cadastro); //envia o cadastro
			}
		}
		fclose($fp); // fecha o arquivo

		echo "<div align=\"center\"><b><font face=\"Verdana, Arial,
   			Helvetica, sans-serif\" color=\"#00CC00\">
			Configurações alteradas com sucesso</font></b></div>";
	}
?>

<html>
<head>
<title>Administração das Pessoas Cadastradas</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF" text="#000000" link="#FFFFFF" vlink="#CCCCCC" alink="#CCCCCC">

<table width="760" border="0" cellspacing="1" cellpadding="0" align="center">
  <th bgcolor="#336699" colspan=1 align=left>
	&nbsp;&nbsp;&nbsp;&nbsp;
	<b>Administração das Pessoas Cadastradas</b><font size="1">
      ( 	<a href="http://www.dcc.ufmg.br/~ejchagas">www.dcc.ufmg.br/~ejchagas</a> 
      )</font></font>
  </th>
</table>

<table width="760" border="0" cellspacing="1" cellpadding="0" align="center" bgcolor="#EEEDEA">
<tr>
<td>&nbsp;
</td>
</tr>
<form name="form2" method="post" action="administra.php">

     <th colspan="4" bgcolor="#EEEDEA" colspan=3>
       <font face="Verdana, Arial, Helvetica, sans-serif" size="2">
          Entre com as modificações nos campos abaixo.
        </font>
     </th>
<tr>
<th colspan=3>
  <hr width="95%" size="1" align="center" noshade>&nbsp;
</th>
</tr>

  <tr>
     <td>&nbsp;
     </td>

     <td>
      <font face="Verdana, Arial,Helvetica, sans-serif"	size="2">
        <b>Nome</b>
      </font>
     </td>

     <td>
       <font face="Verdana, Arial,Helvetica, sans-serif" size="2">
         <b>E-mail</b>
       </font>
     </td>
  </tr>

<?php
$dados = file("cadastro.php");
$subdados[1] = $dados[0];
$contador = 0;

for($i=0; $subdados[1]; $i+=2)
{
    $contador++;
    $aux = $i;
    $subdados_aux = explode("=",$dados[$aux]);
    $subdados[1] = $subdados_aux[1];
    $aux++;
    $subdados_aux = explode("=",$dados[$aux]);
    $subdados[2] = $subdados_aux[1];
?>
	<tr>
      <td>
		<font face="Verdana, Arial, Helvetica, sans-serif" size="2">
		 <b>Cadastro <?php echo $contador; ?>
         </b>
        </font>
      </td>

      <td>
		<font face="Verdana, Arial, Helvetica, sans-serif" size="2">
		<input type="text" name="nome[<?php echo $contador; ?>]" size="50" maxlength="50"
            value="<?php echo $subdados[1]; ?>">
        </font>
      </td>

      <td>
		<font face="Verdana, Arial, Helvetica, sans-serif" size="2">
		<input type="text" name="email[<?php echo $contador; ?>]" size="40" maxlength="40"
		    value="<?php echo $subdados[2]; ?>">
		</font>
      </td>
   </tr>

<?php
    $aux++;
    $subdados[1] = $dados[$aux];
}// fim do for
?>
<tr>
<td>&nbsp;
</td>
</tr>

</table>

<table width="760" border="0" cellspacing="1" cellpadding="0" align="center">
<tr>
<td>
   <input type="hidden" name="passwd"
    value="<?php echo $password; ?>">
   <input type="hidden" name="contador"
    value="<?php echo $contador; ?>">
     <input type="submit" name="submit"
           value="Salvar as modificações">
    <input type="reset" name="Submit2" value="Limpar">
</td>
</tr>
</table>
</form>
</body>
</html>
<?php 
} 
?>
