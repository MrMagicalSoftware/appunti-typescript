
# Array in ts

---

### **1. Dichiarazione di Array**
Un array può essere dichiarato con un tipo specifico:

#### Sintassi:
```typescript
let nomeArray: Tipo[] = []; // Array di elementi di un singolo tipo
let arrayMisto: (Tipo1 | Tipo2)[] = []; // Array con tipi misti
```

#### Esempio:
```typescript
let numeri: number[] = [1, 2, 3];
let parole: string[] = ["ciao", "mondo"];
let misto: (number | string)[] = [1, "due", 3];
```

---

### **2. Iterazione sugli Array**
Puoi usare cicli come `for`, `for...of`, o metodi specifici come `forEach`.

#### Esempio:
```typescript
let numeri: number[] = [10, 20, 30];

// Usando for
for (let i = 0; i < numeri.length; i++) {
    console.log(numeri[i]);
}

// Usando for...of
for (let numero of numeri) {
    console.log(numero);
}

// Usando forEach
numeri.forEach((numero) => console.log(numero));
```

---

### **3. Metodi comuni per Array**

| Metodo              | Descrizione                                                | Esempio                                    |
|---------------------|------------------------------------------------------------|--------------------------------------------|
| `push()`            | Aggiunge un elemento alla fine dell'array                  | `numeri.push(40);`                         |
| `pop()`             | Rimuove e restituisce l'ultimo elemento                    | `let ultimo = numeri.pop();`               |
| `shift()`           | Rimuove e restituisce il primo elemento                    | `let primo = numeri.shift();`              |
| `unshift()`         | Aggiunge uno o più elementi all'inizio                     | `numeri.unshift(0);`                       |
| `splice()`          | Aggiunge/rimuove elementi in una posizione specifica       | `numeri.splice(1, 1); // Rimuove al pos 1` |
| `slice()`           | Restituisce una copia di una porzione dell'array           | `let copia = numeri.slice(1, 3);`          |
| `concat()`          | Unisce due o più array                                    | `let uniti = numeri.concat([50, 60]);`     |
| `indexOf()`         | Trova l'indice della prima occorrenza                      | `let indice = numeri.indexOf(20);`         |
| `includes()`        | Verifica se un elemento esiste                             | `numeri.includes(20);`                     |
| `join()`            | Concatena gli elementi in una stringa                     | `let stringa = numeri.join(", ");`         |
| `reverse()`         | Inverte l'ordine degli elementi                            | `numeri.reverse();`                        |

---

### **4. Metodi per la trasformazione**
#### **`map()`**
Crea un nuovo array applicando una funzione a ogni elemento.
```typescript
let numeri: number[] = [1, 2, 3];
let doppi: number[] = numeri.map((numero) => numero * 2);
console.log(doppi); // Output: [2, 4, 6]
```

#### **`filter()`**
Crea un nuovo array con gli elementi che soddisfano una condizione.
```typescript
let numeri: number[] = [1, 2, 3, 4];
let pari: number[] = numeri.filter((numero) => numero % 2 === 0);
console.log(pari); // Output: [2, 4]
```

#### **`reduce()`**
Combina tutti gli elementi in un unico valore.
```typescript
let numeri: number[] = [1, 2, 3, 4];
let somma: number = numeri.reduce((acc, numero) => acc + numero, 0);
console.log(somma); // Output: 10
```

---

### **5. Ricerca e controllo**
#### **`find()`**
Restituisce il primo elemento che soddisfa una condizione.
```typescript
let numeri: number[] = [1, 2, 3, 4];
let trovato: number | undefined = numeri.find((numero) => numero > 2);
console.log(trovato); // Output: 3
```

#### **`findIndex()`**
Restituisce l'indice del primo elemento che soddisfa una condizione.
```typescript
let numeri: number[] = [1, 2, 3, 4];
let indice: number = numeri.findIndex((numero) => numero > 2);
console.log(indice); // Output: 2
```

---

### **6. Ordinamento**
#### **`sort()`**
Ordina gli elementi in base a una funzione di confronto.
```typescript
let numeri: number[] = [3, 1, 4, 1, 5];
numeri.sort((a, b) => a - b); // Ordine crescente
console.log(numeri); // Output: [1, 1, 3, 4, 5]
```

---

### **7. Controlli tipizzati**
Grazie ai tipi di TypeScript, si può garantire che gli array contengano solo elementi del tipo desiderato.

#### Esempio:
```typescript
let numeri: number[] = [1, 2, 3];
// numeri.push("quattro"); // Errore: il tipo 'string' non è assegnabile a 'number'
```

---

