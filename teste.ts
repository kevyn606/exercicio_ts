// Função de multiplicação
function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
  }
  
  // Função de saudação
  function saudacao(nome: string): string {
    return "Olá " + nome;
  }

const resultadoMultiplicacao = multiplicacao(5, 3); 
console.log("Resultado da multiplicação:", resultadoMultiplicacao); 


const saudacaoParaNome = saudacao("pedro"); 
console.log(saudacaoParaNome); 