import { Selector } from 'testcafe';

fixture `Testes da Calculadora`
    .page `https://calculadora-simples-karol.netlify.app/`;

const operacaoSelect = Selector("#operacao")
const operacaoOption = operacaoSelect.find("option")
const valorUm = Selector("#valor_um")
const valorDois = Selector("#valor_dois")
const botaoCalcular = Selector("#botao_calcular")
const caixaResultado = Selector ("#caixa_resultado")
const caixaErro = Selector ("#caixa_erro")

test('Funcionalidade Somar (com os dois operadores positivos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "5")

        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
        .typeText (valorDois, "7")

        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("12")
});

test('Funcionalidade Somar (com o primeiro operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-5")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
        .typeText (valorDois, "2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-3")
});

test('Funcionalidade Somar (com o segundo operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "5")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
        .typeText (valorDois, "-6")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-1")
});

test('Funcionalidade Somar (com os dois operadores negativos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-5")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
        .typeText (valorDois, "-6")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-11")
});

test('Funcionalidade Subtrair (com os dois operadores positivos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("−"))
        
        .click (valorDois)
        .typeText (valorDois, "7")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("3")
});

test('Funcionalidade Subtrair (com o primeiro operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-1")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("−"))
        
        .click (valorDois)
        .typeText (valorDois, "5")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-6")
 });

test('Funcionalidade Subtrair (com o segundo operador negativo)', async t => {
await t 
    .click(valorUm) 
    .typeText (valorUm, "1")

    .click(operacaoSelect)
    .click(operacaoOption.withText("−"))
    
    .click (valorDois)
    .typeText (valorDois, "-5")

    .click (botaoCalcular)
    .expect(caixaResultado.innerText).eql("6")
});

test('Funcionalidade Subtrair (com os dois operadores negativos)', async t => {
await t 
    .click(valorUm) 
    .typeText (valorUm, "-1")

    .click(operacaoSelect)
    .click(operacaoOption.withText("−"))
    
    .click (valorDois)
    .typeText (valorDois, "-5")

    .click (botaoCalcular)
    .expect(caixaResultado.innerText).eql("4")
});

test('Funcionalidade Divisão (com os dois operadores positivos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("÷"))
        
        .click (valorDois)
        .typeText (valorDois, "2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("5")
});

test('Funcionalidade Divisão (com o primeiro operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("÷"))
        
        .click (valorDois)
        .typeText (valorDois, "-2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("5")
});

test('Funcionalidade Divisão (com o segundo operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("÷"))
        
        .click (valorDois)
        .typeText (valorDois, "-2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-5")
});

test('Funcionalidade Divisão (com os dois operadores negativos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("÷"))
        
        .click (valorDois)
        .typeText (valorDois, "-2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("5")
});

test('Funcionalidade Multiplicação (com os dois operadores positivos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("×"))
        
        .click (valorDois)
        .typeText (valorDois, "2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("20")
});

test('Funcionalidade Multiplicação (com o primeiro operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("×"))
        
        .click (valorDois)
        .typeText (valorDois, "2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-20")
});

test('Funcionalidade Multiplicação (com o segundo operador negativo)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("×"))
        
        .click (valorDois)
        .typeText (valorDois, "-2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("-20")
});

test('Funcionalidade Multiplicação (com os dois operadores negativos)', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "-10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("×"))
        
        .click (valorDois)
        .typeText (valorDois, "-2")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("20")
});

test('Deixar o primeiro campo vazio', async t => {
    await t 
        .click(valorUm) 
           
        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
        .typeText (valorDois, "2")
    
        .click (botaoCalcular)
        .expect(caixaErro.innerText).eql("Digite apenas números!")
});

test('Deixar o segundo campo vazio', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "9")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
            
        .click (botaoCalcular)
        .expect(caixaErro.innerText).eql("Digite apenas números!")
});

test('Deixar os dois campos vazios', async t => {
    await t 
        .click(valorUm) 
            
        .click(operacaoSelect)
        .click(operacaoOption.withText("+"))
        
        .click (valorDois)
            
        .click (botaoCalcular)
        .expect(caixaErro.innerText).eql("Digite algum valor!")
});

test('Colocar o divisor igual a zero', async t => {
    await t 
        .click(valorUm) 
        .typeText (valorUm, "10")
    
        .click(operacaoSelect)
        .click(operacaoOption.withText("÷"))
        
        .click (valorDois)
        .typeText (valorDois, "0")
    
        .click (botaoCalcular)
        .expect(caixaResultado.innerText).eql("Infinity")
});