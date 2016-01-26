			
			
			
		</div>
	</div>
        <script src="http://code.jquery.com/jquery-1.12.0.js"></script>
    <script>
        $('#lista').on('click', 'li', function() {
        var texto = $(this).text();
        alert(texto);
    });
        
        $('#botao-adiciona').click(function (){
           
            var texto = $('#treinamento').val();
            
            $('#add').text(texto);
            
            $('<li>').text(texto).css({ 'color' : 'blue', 'background-color' : 'lightgrey'}).appendTo('#lista');
            
        });
        
       
        
        
        function getVet(){;
            
            var opcao = $('#sel_sexo').val();
            var idade = $('#inp-form-idade').val();
            var altura = $('#inp-form-altura').val();
            var peso = $('#inp-form-peso').val();
            var injuria = $('#inp-form-inj').val();
            var termico = $('#inp-form-ter').val();
            var atividade = $('#inp-form-atv').val();
            var kcal = $('#inp-form-kca').val();
            
            
            if( $('#inp-form-idade').val() === "" || $('#inp-form-altura').val() === "" || $('#inp-form-peso').val() === ""){
                
                alert("Preencha todos os campos !");
            
            }else
            
            {
                
                if(opcao === "Masculino"){
                    
                    if(injuria === ""){
                        injuria = 1;
                    }
                    
                    if(atividade === ""){
                        atividade = 1;
                    }
                    if(termico=== ""){
                        termico = 1;
                    }
                  
                  
                    
                    var resultado = (66.43 + (5.00 * altura) + ((13.75 * peso) - (6.75 * idade))) * injuria * termico * atividade;
                                        
                    $('#id-imput-form-vet').val(resultado);
                    
                }else{
                    
                    if(injuria === ""){
                        injuria = 1;
                    }
                    
                    if(atividade === ""){
                        atividade = 1;
                    }
                    if(termico=== ""){
                        termico = 1;
                    }
                  
                    
                    
                   var resultado = ((655.09 + (1.84 * altura) + ((8.56 * peso) - (4.67 * idade)))) * injuria * termico * atividade;
                    
                   $('#id-imput-form-vet').val(resultado);    
                }
            
            }
            
            
        }
        
    $('#btn_vet').on("click", function(){
       //getVet(); 
        var data = $('#data_prox').val();   
        event.preventDefault(); // Serve para retirar a ação do click do link
		$("#id-proxima-dieta").load("acaoHora.php?acao="+ data);
    });
        
    $('#inp-form-kca').on("blur", function(){
        
        var kcal = $('#inp-form-kca').val();
        var peso = $('#inp-form-peso').val();
        if(peso === ""){
            alert("É necessário que o PESO esteja preechido !");
        }else {
            
        var resultado = kcal * peso;   
            
        $('#id-form-vet-pratico').val(resultado);
        }
    });
        
        
        
        $('#id-form-tempo').on("blur", function(){
           var volume = $('#id-form-volume').val();
           var tempo = $('#id-form-tempo').val();
            
            if(volume === "" | tempo === ""){
                alert("Os campos Volume e Tempos devem estar preenchidos !");
            }else {
                
            var valor = $('#data_prox').val();
            $('#id-proxima-dieta').val(valor);
                
                
            var resultado = volume / tempo ;
            
            $('#id-form-ml-h').val(resultado.toFixed(2));
            }
            
        });
        
        $('#id-form-tempo').on("blur", function(){
        
            
        });
        
     
            
    </script>
	
</body>
	
</html>