var valorUm = document.getElementById('valor_um')
var valorDois = document.getElementById('valor_dois')
var operacao = document.getElementById('operacao')

var botaoCalcular = document.getElementById('botao_calcular')
var caixaResultado = document.getElementById('caixa_resultado')
var caixaErro = document.getElementById('caixa_erro')

function executarOperacao(v1, v2, op) {
    var resultado

    if (!v1 && !v2) {
        return 'vazio'
    }

    var v1float = parseFloat(v1)
    var v2float = parseFloat(v2)

    if (op == 'soma') {
        resultado = v1float + v2float
    }

    if (op == 'subtracao') {
        resultado = v1float - v2float
    }

    if (op == 'divisao') {
        resultado = v1float / v2float
    }

    if (op == 'multiplicacao') {
        resultado = v1float * v2float
    }

    if (!resultado && resultado !== 0) {
        return 'inválido'
    }

    return resultado
}

botaoCalcular.addEventListener('click', function() {
    var resultadoOperacao = executarOperacao(valorUm.value, valorDois.value, operacao.value)

    if (resultadoOperacao == `vazio`) {
        caixaErro.innerText = 'Digite algum valor!'
        caixaResultado.innerText = ""
        return
    }

    if (resultadoOperacao == `inválido`) {
        caixaErro.innerText = 'Digite apenas números!'
        caixaResultado.innerText = ""
        return
    }

    caixaErro.innerText = ''
    caixaResultado.innerText = resultadoOperacao
})
