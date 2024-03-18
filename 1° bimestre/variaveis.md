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


>## Exerxício sobre o conteúdo:
```
```

