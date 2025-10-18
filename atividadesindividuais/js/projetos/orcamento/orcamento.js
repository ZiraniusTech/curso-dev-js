document.querySelector('.seu-nome').textContent = "Cesar Vieira";

const PRECO_POR_PAGINA = 500;
const PRECO_DESIGN_ADICIONAL = 1000;

const inputpaginas = document.querySelector("#qtd-paginas");
const imputDesconto = document.querySelector("#desconto");
const checkBoxDesign = document.querySelector("#inclui-design");
const InputPrazo = document.querySelector("#prazo-entrega");
const resumoSubtotal = document.querySelector("#resumo-subtotal");
const resumoAdicional = document.querySelector("#resumo-adicional");
const resumoUrgencia = document.querySelector("#resumo-urgencia");
const resumoDesconto = document.querySelector("#resumo-desconto");
const resumoTotal = document.querySelector("#resumo-total");

const calcularSubtotal = (quantidade) => quantidade * PRECO_POR_PAGINA;

const calcularValorDesconto = (valor, porcentagem) => valor * (porcentagem/100);

function calcularTaxaDeUrgencia(valor, prazo){

/*Regras de Negócio (RN)
Preço por Página: R$ 500,00
Custo Adicional de Design: R$ 1.000,00
Taxa de Urgência: 
   - Se o prazo for menor que 5 dias: 10% sobre o valor base (páginas + design).
   - Se o prazo for menor que 15 dias: 5% sobre o valor base (páginas + design). 
   - Se for 15 dias ou mais, a taxa é zero.
Desconto: O desconto percentual é aplicado sobre a soma de todos os custos únicos (páginas + design + taxa de urgência).*/
    if (prazo >0 && prazo < 5){
            return valor * 0.10; 
    }   else if (prazo >= 5 && prazo < 15){
            return valor * 0.05;
    }   else{
            return 0;
    }
}

function atualizarOrcamento(){

    const qtdPaginas = Number (inputpaginas.value);
    const porcentagemDescont = Number (imputDesconto.value);
    const prazo = Number (InputPrazo.value);
    const designIncluido = checkBoxDesign.checked;

    const subtotal = calcularSubtotal(qtdPaginas);
    const adicionalDesign = designIncluido ? PRECO_DESIGN_ADICIONAL : 0;
    

}

