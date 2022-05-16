function insert(num){
   var numero = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = numero + num;
}
function clean(){
    document.getElementById('result').innerHTML = '';
}
function remove(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1)
}
function calc(){
    var resultado = document.getElementById('result').innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    } else{
        alert('Nenhuma operação feita...')
    }
}