# Váriaveis
Beatriz Oliveira Santos 
 ### Conceito váriaveis

As variáveis são usadas para armazenar dados em um programa, como strings, números, objetos JSON ou valores booleanos.

No Javascript existem 3 tipos de váriaveis, são eles:

- `let`
- `var`
- `const`

## Declaração de váriaveis

  **1.**  O `let` é usado para declarar variáveis dentro do <u>**escopo**</u> do bloco em que são definidas. Variáveis declaradas com let também são inicializadas com o valor <u>**undefined**</u>
 até que se atribua um valor a elas.

```javascript
function minhafuncao(){
    let x; 
    let y = 10;

}
 
```
> [!NOTE]
> Preste atenção no "undefined" é um tipo de primitivo que veremos mais a frente.

**2.** O `var` é usado para declarar uma váriavel globalmente, fora do escopo, não há uma restrição dele . Variáveis declaradas com var são inicializadas com o valor undefined até que se atribua um valor a elas.

```javascript

var x = 10;
var y =20;

function minhafuncao(){
  let total= x.y

}
```
**3.** O `const` é uma variavel que possui escopo assim como o let,porem elas devem ser inicializadas com um valor, esse valor não pode ser alterado após a sua atribuição inicial. Isso significa que uma vez que você atribui um valor a uma constante, você não pode atribuir outro valor a ela.

```javascript
function example() {
    const x = 10;
    // Tentativa de reatribuição:
    x = 20; // TypeError: Assignment to constant variable.
}


```
## Escopo

Escopo, em programação, refere-se à visibilidade e acessibilidade de variáveis em diferentes partes do código. Em outras palavras, o escopo determina onde exatamente uma variável pode ser acessada e modificada dentro de um programa, existem três tipos de escopo: global, bloco e função.

**1.** No escopo global, as variáveis são declaradas fora de qualquer bloco de código, geralmente no nível mais alto do programa, e elas podem ser acessadas de qualquer lugar no programa, incluindo dentro de funções permanecendo acessíveis enquanto o programa estiver em execução.
O escopo global é acessível por todas as funções e blocos de código dentro do programa.

**2.** O escopo de bloco foi introduzido é definido por pares de chaves {} em JavaScript.
Variáveis declaradas dentro de um bloco de código ({}) têm escopo de bloco e só são acessíveis dentro desse bloco. Isso inclui as  variáveis declaradas com let e const.

**3.** No escopo de função, as variáveis são declaradas dentro de uma função e só são acessíveis dentro dessa função. O escopo de função pode ser visto como uma extensão do escopo global, mas limitado à função onde a variável foi definida.



>## Exerxício sobre o conteúdo (código):
```html
<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício variaveis - Calculadora</title>

    <style>
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid rgb(0, 0, 0);
            background-color: gray;
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            width: 40vh;
            height: 40vh;
        }
        
        input {
            width: 30px;
            background-color: gray;
        }

        button {
            width: 60px;
        }
    </style>
</head>
<body>
    <div>
        <h1>Calculadora</h1>
        <label>10</label>
        <select id="operacoes" style="width: 50px;">
            <option value="1">+</option>
            <option value="2">-</option>
            <option value="3">x</option>
            <option value="4">/</option>
        </select>
        <input type="number" id="numero2"><br>
        <label id="resultado"></label><br>
        <button onclick="calcular()">calcular</button>
    </div>

    <script>
        var resultado = document.getElementById("resultado");
        function calcular() {
            let numero2 = document.getElementById("numero2").value;

            var escolha = document.getElementById("operacoes").value;
            const numero1 = 10;  //valor que nao pode ser mudado

            if (escolha === "1") {
                resultado.innerHTML = parseInt(numero1) + parseInt(numero2);
            } else if (escolha === "2") {
                resultado.innerHTML = parseInt(numero1) - parseInt(numero2);
            } else if (escolha === "3") {
                resultado.innerHTML = parseInt(numero1) * parseInt(numero2);
            } else if (escolha === "4") {
                resultado.innerHTML = parseInt(numero1) / parseInt(numero2);
            }
        }
    </script>
</body>
</html>
```

