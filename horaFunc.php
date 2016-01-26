<?php 

function getHora(){
            $hora = 4;
            $data = date('m/d/Y h:i:s');
            $date = new DateTime($data);
            $date->add(new DateInterval('PT'.$hora.'H'));
            $data_proxima = $date->format('d/m/Y H:i:s') . "\n";
            
            return $data_proxima;
}