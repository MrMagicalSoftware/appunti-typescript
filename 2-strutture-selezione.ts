# strutture di selezione

In TypeScript, le **strutture di controllo di selezione** permettono di eseguire blocchi di codice diversi in base a condizioni. Sono molto simili a quelle di JavaScript,
ma in TypeScript puoi sfruttare i tipi per migliorare la sicurezza e il controllo.

---

### **1. `if`, `else if`, `else`**
Usata per eseguire codice in base a una condizione booleana.

#### Sintassi:
```typescript
if (condizione) {
    // Codice eseguito se la condizione è vera
} else if (altraCondizione) {
    // Codice eseguito se la seconda condizione è vera
} else {
    // Codice eseguito se nessuna condizione precedente è vera
}
```

#### Esempio:
```typescript
let eta: number = 25;

if (eta < 18) {
    console.log("Sei minorenne.");
} else if (eta >= 18 && eta < 65) {
    console.log("Sei un adulto.");
} else {
    console.log("Sei in pensione.");
}
```

---

### **2. `switch`**
Usata per confrontare una variabile con più valori possibili.

#### Sintassi:
```typescript
switch (espressione) {
    case valore1:
        // Codice da eseguire se espressione === valore1
        break;
    case valore2:
        // Codice da eseguire se espressione === valore2
        break;
    default:
        // Codice eseguito se nessun caso corrisponde
}
```

#### Esempio:
```typescript
enum Colore { Rosso, Verde, Blu }
let colorePreferito: Colore = Colore.Verde;

switch (colorePreferito) {
    case Colore.Rosso:
        console.log("Hai scelto il Rosso.");
        break;
    case Colore.Verde:
        console.log("Hai scelto il Verde.");
        break;
    case Colore.Blu:
        console.log("Hai scelto il Blu.");
        break;
    default:
        console.log("Colore non riconosciuto.");
}
```

---

### **3. Operatore ternario**
Permette di scrivere un'istruzione `if-else` compatta.

#### Sintassi:
```typescript
condizione ? valoreSeVero : valoreSeFalso;
```

#### Esempio:
```typescript
let punteggio: number = 85;
let risultato: string = punteggio >= 60 ? "Promosso" : "Bocciato";
console.log(risultato); // Output: "Promosso"
```

---

### **4. `type guards` (Controllo del tipo)**
In TypeScript, si può usare `typeof` o `instanceof` per verificare i tipi durante l'esecuzione.

#### `typeof`:
Verifica tipi primitivi.
```typescript
let valore: any = 42;

if (typeof valore === "number") {
    console.log("È un numero.");
} else if (typeof valore === "string") {
    console.log("È una stringa.");
}
```

#### `instanceof`:
Verifica istanze di classi o oggetti.
```typescript
class Persona {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

let mario = new Persona("Mario");

if (mario instanceof Persona) {
    console.log("È una persona.");
}
```

---

### **5. Pattern Matching con `in`**
Utile per verificare se una proprietà esiste in un oggetto.
```typescript
type Animale = { tipo: string; velocita: number };
type Auto = { marca: string; velocita: number };

let veicolo: Animale | Auto = { tipo: "ghepardo", velocita: 120 };

if ("tipo" in veicolo) {
    console.log(`È un animale di tipo ${veicolo.tipo}.`);
} else if ("marca" in veicolo) {
    console.log(`È un'auto di marca ${veicolo.marca}.`);
}
```

---

