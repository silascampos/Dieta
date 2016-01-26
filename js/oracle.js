/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function MudarestadoRow(el) {
    var display = document.getElementById(el).style.display;

    if (display == "none")
        document.getElementById(el).style.display = 'table-row';
    else
        document.getElementById(el).style.display = 'none';
}

function MudarestadoDiv(el) {
    var display = document.getElementById(el).style.display;

    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}


function mostraSenha(id) {
    document.getElementById(id).type = "text";
}

function ocultaSenha(id) {
    document.getElementById(id).type = "password";
}

function changeValue(id, value){
    document.getElementById(id).value = value;
}


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
