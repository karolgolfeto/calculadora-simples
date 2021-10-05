import { Selector } from 'testcafe';

fixture `Testes da Calculadora`
    .page `https://calculadora-simples-karol.netlify.app/`;

const operacaoSelect = Selector("#operacao")
const operacaoOption = operacaoSelect.find("option")
const valorUm = Selector("#valor_um")
const valorDois = Selector("#valor_dois")
const botaoCalcular = Selector("#botao_calcular")
const caixaResultado = Selector ("#caixa_resultado")

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

test('Funcionalidade Somar (com primeiro operador negativo)', async t => {
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

test('Funcionalidade Somar (com segundo operador negativo)', async t => {
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

test('Funcionalidade Subtrair (com primeiro operador negativo)', async t => {
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

 test('Funcionalidade Subtrair (com segundo operador negativo)', async t => {
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

test('Funcionalidade Divisão', async t => {
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

test('Funcionalidade Multiplicação', async t => {
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
