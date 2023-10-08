const resultado = document.getElementById('resultado')

function insert(num){
    resultado.innerHTML += num
}

function limpar(){
    resultado.innerHTML = ""
}

function back(){
    const resultado = document.getElementById('resultado').innerHTML

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else{
        document.getElementById('resultado').innerHTML = "Vazio"
    }
}