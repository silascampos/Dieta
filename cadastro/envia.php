<?php
function verifica_mail($mail)
{
    if (strpos ($mail, "@") == 0)
    {
        return false;
    }

    list($user,$domain)=split("@",$mail,2);

    if (checkdnsrr($domain,"MX"))
    {
         return true;
    }
    else
    {
         return false;
    }
}
       $fp = fopen("email.php", "r");
       $mailaddr = fread($fp,filesize("email.php"));
       fclose($fp);
       
       mail($mailaddr, $mailsubject, $corpo,"Remetido por Fulano<fulano@fulano.com.br>");
	   echo "E-mail enviado corretamente.";
?>
