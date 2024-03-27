## Tipos de dados
Beatriz Oliveira Santos

### Conceito Tipos de dados

No JavaScript, existem vários tipos de dados, onde eles são divididos em 3 categorias principais: tipos de **dados primitivos**, tipos de **dados objetos** e **array**. Cada tipo de dado, serve para diferentes propósitos e é útil em diferentes situações.

## Tipos primitivos
Os tipos primitivos, referem-se aos tipos de dados fundamentais que não são objetos e não possuem métodos ou propriedades. Eles são valores simples que são diretamente manipulados pelo sistema e geralmente têm um tamanho fixo na memória, são eles:
 
 - `number` : Representa valores numéricos, como inteiros e números de ***ponto flutuante***.

- `string` : Representa sequências de caracteres, como texto.

- `boolean` : Representa um valor lógico verdadeiro (true) ou falso (false).


- `null`: Representa a ausência intencional de qualquer valor ou objeto.
  
- `undefined` : Indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
  

>[!NOTE] ponto flutuante: geralmente não têm uma representação binária exata. Em vez disso, o computador armazena uma aproximação do número.

  # Number
  ---
   O Javascript possui dois tipos de representação de números, sendo Number o primeiro e mais comum deles, através deles podemos fazer uso de valores numéricos para a construção de algoritmos. Eles podem ser representados de forma decimal, fazendo uso de um ponto flutuante entre os algarismos, e não decimal .


```javascript
let idade = 30; // Número inteiro
let altura = 1.75; // Número de ponto flutuante
```

# String
---
Strings estão entre os tipos de dados mais comuns e nada mais são do que uma série de caracteres com aspas em suas extremidades como “Hello World” ou ‘camelCase’. Strings também podem ser construídas usando a função String().

```javascript
let nome = "João"; // String
let mensagem = 'Olá, mundo!'; // String
```
# Boolean
---
Boolean é um tipo de dado que só pode assumir os valores true e false, que em português é o equivalente a verdadeiro e falso respectivamente. Em Javascript, Boolean é comumente utilizado como uma função em variáveis, condições, objetos dentre outros quando temos de verificar se um retorno foi verdadeiro ou não .

```javascript
let solEstaBrilhando = true; // Boolean true
let temChuva = false; // Boolean false
```

# Null
---
O tipo null pode ser utilizado para representar o nada ou o vazio . Se você conhece a linguagem de programação Python, provavelmente já deve ter visto o None, que é bastante parecido com o que temos em Javascript. Assim como em Python, no Javascript o null também é um objeto. 

```javascript
let resposta = null; // Valor nulo
```

# Undefined 
---
Semelhante ao null, nós temos o tipo primitivo de dado undefined. Ele é designado automaticamente quando por exemplo, uma variável vazia é criada. Assim como o null também podemos utilizá-lo para esvaziar um objeto. Uma função também retornará undefined caso ela não retorne nenhum valor.  A diferença ente o Null e o Undefined é que eles são iguais em valor, mas diferentes em tipos. O tipo do undefined é o próprio undefined e no caso do null é mostrado que é um objeto.

```javascript
let valor; // Undefined
console.log(valor); // Saída: undefined
```

>## Exerxício de fixação sobre o conteúdo (dados primitivos):

**1.** Assinale as alternativas corretas e justifique as erradas:

  - [ ] Existem no javascript 2 tipos de categorias principais de dados: O tipo primitivo, e o tipo de objetos
    
  - [ ] O tipo `boolean` retorna apenas valores falsos, pois o javascript entende que nenhum valor verdadeiro pode ser retornado dentro desse tipo de dado.
  - [ ] O tipo `undefined` e `null` possuem a mesma função, não se diferenciando em nenhum aspecto.
  - [ ] Os tipos de dados primitivos são compostos por propriedades e métodos que permitem uma manipulação mais avançada e organizada dos dados.
  - [ ] As Strings representam sequências de caracteres, como texto.

**Gabarito**

  - [x] Existem no javascript 3 tipos de categorias principais de dados: O tipo primitivo, o tipo de objetos e o array.
    
  - [ ] O tipo `boolean` retorna apenas valores falsos, pois o javascript entende que nenhum valor verdadeiro pode ser retornado dentro desse tipo de dado.  
  **Errado**: O tipo boolean pode retornar tanto true quanto false, representando valores lógicos verdadeiros e falsos, respectivamente.

  - [ ] O tipo `undefined` e `null` possuem a mesma função, não se diferenciando em nenhum aspecto.     
  **Errado**: Embora ambos `undefined` e `null` representem a ausência de valor, eles são conceitualmente diferentes. undefined é atribuído automaticamente a variáveis que não foram inicializadas, enquanto null é atribuído manualmente para indicar explicitamente a ausência de valor.  
  **Errado**: Os tipos de dados primitivos em JavaScript são valores simples que não são objetos e, portanto, não possuem métodos ou propriedades.

  - [ ] Os tipos de dados primitivos são compostos por propriedades e métodos que permitem uma manipulação mais avançada e organizada dos dados.     
**Errado**: Os tipos de dados primitivos em JavaScript são valores simples que não são objetos e, portanto, não possuem métodos ou propriedades.
  - [x] As Strings representam sequências de caracteres, como texto.
  


## Tipos Objetos 

### Conceitos
  Os tipos de dados objetos em JavaScript referem-se a estruturas de dados complexas que podem armazenar coleções de dados e métodos relacionados.
  Ao contrário dos tipos de dados primitivos, que representam valores simples, os tipos de dados objeto são compostos por propriedades e métodos que permitem uma manipulação mais avançada e organizada dos dados.

  # Objeto
  ---
  Um objeto em JavaScript é uma coleção de pares chave-valor, onde as chaves são strings e os valores podem ser de qualquer tipo de dado, incluindo outros objetos, arrays, funções, etc. Os objetos são utilizados para representar entidades ou conceitos do mundo real, e cada propriedade de um objeto descreve algum aspecto desse objeto.

  Exemplo de objeto:
  ```javascript
  var pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};
console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30
console.log(pessoa.cidade); // Saída: São Paulo
  ```

# Array
Um array em JavaScript é uma coleção ordenada de valores, onde cada valor é identificado por um índice numérico. Os arrays são usados para armazenar listas de elementos e são extremamente versáteis, permitindo a manipulação eficiente de conjuntos de dados. Os elementos de um array podem ser de qualquer tipo de dado, incluindo outros arrays, objetos, números, strings, etc.

Exemplos de array:

```javascript
let numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // Saída: 1
console.log(numeros.length); // Saída: 5

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let frutas = ["Maçã", "Banana", "Morango", "Abacaxi"];

let pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 35 }
];
```


>## Exercício de fixação (objetos e array)

Faça um esquema de lanchonete usando tipos de dados objetos e array:

```javascript
var lanchonete = {
    cliente: {
        nome: "Giovana",
        endereco: "Castelo Branco 254",
        cpf: "837.875.152-10"
    },
    pedidos: {
       itens: [
            { nome: "X-Burger", preco: 15.50 },
            { nome: "Refrigerante", preco: 5.00 }
        ]
    }
}
  console.log(lanchonete.cliente.nome);
  console.log(lanchonete.cliente.endereco);
  console.log(lanchonete.cliente.cpf);

  console.log(lanchonete.pedidos.itens[0].nome);
  console.log(lanchonete.pedidos.itens[0].preco);

```
# Operadores Básicos

## Conceito de Operadores Básicos
Operadores básicos, em programação, são símbolos ou palavras reservadas que permitem realizar operações sobre variáveis e valores. Eles são fundamentais para a execução de cálculos, comparações, atribuições e outras operações em um programa.

Aqui estão alguns dos operadores básicos mais comuns:

- Aritméticos: São usados para realizar operações matemáticas simples, como adição, subtração, multiplicação e divisão. Exemplos incluem + (adição), - (subtração), * (multiplicação), / (divisão) e % (módulo).

```javascript
let a = 10;
let b = 5;

let soma = a + b; // Adição
let subtracao = a - b; // Subtração
let multiplicacao = a * b; // Multiplicação
let divisao = a / b; // Divisão
let modulo = a % b; // Módulo (resto da divisão)
```

- Atribuição: Usado para atribuir valores a variáveis. Exemplo: = (atribuição simples), += (adição e atribuição), -= (subtração e atribuição), *= (multiplicação e atribuição), entre outros.
```javascript
let x = 10;
x += 5; // Equivalente a: x = x + 5;
```

- Comparação: Utilizado para comparar valores e produzir um valor lógico (verdadeiro ou falso) como resultado. Exemplos incluem == (igual a), != (diferente de), > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a).

```javascript
let idade = 20;

// Verifica se idade é maior que 18
if (idade > 18) {
    console.log("Você é maior de idade.");
}

// Verifica se idade é igual a 18
if (idade === 18) {
    console.log("Você tem 18 anos.");
}
```

- Lógicos: São usados para combinar ou negar valores lógicos. Exemplos incluem && (e lógico), || (ou lógico), ! (negação lógica).
```javascript
let salario = 3000;
let horasTrabalhadas = 40;

// Verifica se o salário é maior que 2000 E as horas trabalhadas são maiores que 30
if (salario > 2000 && horasTrabalhadas > 30) {
    console.log("Você tem um bom salário e trabalha bastante.");
}

// Verifica se o salário é maior que 3000 OU as horas trabalhadas são maiores que 40
if (salario > 3000 || horasTrabalhadas > 40) {
    console.log("Você ganha um salário alto ou trabalha muitas horas.");
}
```
- Incremento e Decremento: Utilizado para aumentar ou diminuir o valor de uma variável por uma unidade. Exemplos incluem ++ (incremento) e -- (decremento).
  ```javascript
  let contador = 0;

  contador++; // Incremento de 1 (equivale a: contador = contador + 1;)
  contador--; // Decremento de 1 (equivale a: contador = contador - 1;)



- Concatenação: Usado para unir duas ou mais strings em uma única string. Em JavaScript, o operador de concatenação é +.

```javascript
let nome = "João";
let sobrenome = "Silva";

let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Saída: João Silva

```

>## Exercício de fixação (operadores básicos)

Faça o calculo do IMC (Índice de Massa Corporal) de uma pessoa, com base no peso e na altura do usuário.

```javascript
let peso = prompt("Digite o seu peso em quilogramas:");
let altura = prompt("Digite a sua altura em metros:");

peso = parseFloat(peso);
altura = parseFloat(altura);

let imc = peso / (altura * altura);
imc = imc.toFixed(2);

// Exibe o IMC calculado para o usuário
console.log("Seu IMC é: " + imc);
```