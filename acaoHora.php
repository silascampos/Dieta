<?php            
           $acao = $_GET['acao'];  
           
    
    function getHora(){
            $acao = $_GET['acao']; 
            $data = date('m/d/Y h:i:s');
            $date = new DateTime($data);
            $date->add(new DateInterval('PT'.$acao.'H'));
            $data_proxima = $date->format('d/m/Y H:i:s') . "\n";
        
        return $data_proxima
            
          
    }
