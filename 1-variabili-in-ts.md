Dichiarazione delle variabili

**let**
Permette di dichiarare variabili il cui valore può cambiare.

let nome: string = "Mario";
let eta: number = 30;
let attivo: boolean = true;

**const**
Permette di dichiarare variabili il cui valore è immutabile.

const PI: number = 3.14;
const nome: string = "Luigi";

**var**
Ancora valido, ma sconsigliato perché non rispetta il block scope (può causare comportamenti imprevedibili).






Specifica dei tipi

In TypeScript si può specificare esplicitamente il tipo della variabile:

string
number
boolean
array
object
any (qualsiasi tipo, evita il controllo dei tipi)
union types (es.: string | number)
custom types (es.: interfacce o tipi personalizzati)

```
let messaggio: string = "Ciao mondo!";
let numero: number = 42;
let lista: number[] = [1, 2, 3];
let dati: any = { nome: "Mario", eta: 25 }; // qualsiasi tipo
let valore: string | number = "Può essere una stringa o un numero";
```


**Inferenza dei tipi**

Se il tipo non viene specificato, TypeScript prova a dedurlo automaticamente:
```
let auto = "Fiat"; // TypeScript deduce che `auto` è di tipo string
```



**Tipi avanzati**

Tuple
Array con tipi predefiniti:
```
let coppia: [string, number] = ["Mario", 30];
```
Enum
Per definire insiemi di valori costanti:
```
enum Colore { Rosso, Verde, Blu }
let colorePreferito: Colore = Colore.Verde;
```
Oggetti tipizzati
Specificando la struttura di un oggetto:
```
let persona: { nome: string; eta: number } = { nome: "Mario", eta: 40 };
```






