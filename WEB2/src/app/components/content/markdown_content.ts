export const MARKDOWN_CONTENT = [
  {
    content: `Probabilidade é um ramo da Matemática em que as chances de ocorrência de experimentos são calculadas. É por meio de uma probabilidade, por exemplo, que podemos saber desde a chance de obter cara ou coroa no lançamento de uma moeda até a chance de erro em pesquisas.`,
  },
  {
    content: `# Experimento aletório 
  É qualquer experiência cujo resultado não seja conhecido. Por exemplo: ao jogar uma moeda e observar a face superior, é impossível saber qual das faces da moeda ficará voltada para cima, exceto no caso em que a moeda seja viciada (modificada para ter um resultado mais frequentemente).
  
  Suponha que uma sacola de supermercado contenha maçãs verdes e vermelhas. Retirar uma maçã de dentro da sacola sem olhar também é um experimento aleatório.`
  },
  {
    content: `# Ponto Amostral 
  Um ponto amostral é qualquer resultado possível em um experimento aleatório. Por exemplo: no lançamento de um dado, o resultado (o número que aparece na face superior) pode ser 1, 2, 3, 4, 5 ou 6. Então, cada um desses números é um ponto amostral desse experimento.`
  },
  {
    content: `# Espaço Amotral
  O espaço amostral é o conjunto formado por todos os pontos amostrais de umexperimento aleatório, ou seja, por todos os seus resultados possíveis. Dessa maneira, o resultado de um experimento aleatório, mesmo que não seja previsível, sempre pode ser encontrado dentro do espaço amostral referente a ele. Como os espaços amostrais são conjuntos de resultados possíveis, utilizamos as representações de conjuntos para esses espaços. Por exemplo: O espaço amostral referente ao experimento “lançamento de um dado” é o conjunto Ω, tal que:     
  
  Ω = {1, 2, 3, 4, 5, 6}  
  
  Esse conjunto também pode ser representado pelo diagrama de Venn ou, dependendo do experimento, por alguma lei de formação.
  
  O número de elementos dos espaços amostrais é representado por n(Ω). No caso do exemplo anterior, n(Ω) = 6. Lembre-se de que os elementos de um espaço amostral são pontos amostrais, ou seja, resultados possíveis de um experimento aleatório.`
  },
  {
    content: `# Evento
  Os eventos são subconjuntos de um espaço amostral. Um evento pode conter desde zero a todos os resultados possíveis de um experimento aleatório, ou seja, o evento pode ser um conjunto vazio ou o próprio espaço amostral. No primeiro caso, ele é chamado de evento impossível. No segundo, é chamado de evento certo.
  
  Ainda no experimento aleatório do lançamento de um dado, observe os seguintes eventos:
  
  A = Obter um número par:
  
  A = {2, 4, 6} e n(A) = 3
  
  B = Sair um número primo:
  
  B = {2, 3, 5} e n(B) = 3

  C = Sair um número maior ou igual a 5:
  
  C = {5, 6} e n(C)= 2
  
  D = Sair um número natural:
  
  D = {1, 2, 3, 4, 5, 6} e n(D) = 6
    `
  },
  {
    content: `# Espaços Equiprováveis
  
  Um espaço amostral é chamado equiprovável quando todos os pontos amostrais dentro dele têm a mesma chance de ocorrer. É o caso de lançamentos de dados ou de moedas não viciados, escolha de bolas numeradas de tamanho e peso idênticos etc.
  
  Um exemplo de espaço amostral que pode ser considerado não equiprovável é o formado pelo seguinte experimento: escolher entre tomar sorvete ou fazer caminhada.
    `
  },
  {
    content: `# Cálculo de probabilidades
  
  As probabilidades são calculadas dividindo-se o número de resultados favoráveis pelo número de resultados possíveis, ou seja:
  
  P = n(E)/n(Ω)
  
  Nesse caso, E é um evento que se quer conhecer a probabilidade, e Ω é o espaço amostral que o contém.
  
  Por exemplo, no lançamento de um dado, qual a probabilidade de sair o número um?
  
  Nesse exemplo, sair o número um é o evento E. Assim, n(E) = 1. O espaço amostral desse experimento contém seis elementos: 1, 2, 3, 4, 5 e 6. Logo, n(Ω) = 6. Desse modo:
  
  P = n(E)/n(Ω)
  
  P = 1/6
  
  P = 1,666...
  
  P = 16,6%
  
  Outro exemplo: qual a probabilidade de obtermos um número par no lançamento de um dado?
  
  Os números pares possíveis em um dado são 2, 4 e 6. Logo, n(E) = 3.
  
  P = 3/6
  
  P = 0,5
  
  P = 50%
  
  Observe que as probabilidades sempre resultarão em um número dentro do intervalo 0 ≤ x ≤ 1. Isso acontece porque E é um subconjunto de Ω. Dessa maneira, E pode conter desde zero até, no máximo, o mesmo número de elementos que Ω.
    `
  },
  {
    content: `## Caso deseje ver mais sobre probabilidade, acesse: https://www.youtube.com/watch?v=8g571hUvgeo&ab_channel=EquacionaComPauloPereira`
  },

]