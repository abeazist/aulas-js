## Tipos de dados
Beatriz Oliveira Santos

### Conceito Tipos de dados

No JavaScript, existem vários tipos de dados, onde eles são divididos em duas categorias principais: tipos de **dados primitivos** e tipos de **dados objetos**. Cada tipo de dado, serve para diferentes propósitos e é útil em diferentes situações.

## Tipos de dados primitivos
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

>## Exerxício de fixação sobre o conteúdo: