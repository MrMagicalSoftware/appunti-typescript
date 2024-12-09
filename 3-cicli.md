In TypeScript, le **strutture di ciclo** consentono di ripetere un blocco di codice un numero definito o indefinito di volte, in base a una condizione. 
Sono simili a quelle di JavaScript, con il vantaggio del controllo dei tipi. 

---

### **1. `for`**
Permette di iterare un numero predefinito di volte.

#### Sintassi:
```typescript
for (inizializzazione; condizione; incremento) {
    // Codice da eseguire
}
```

#### Esempio:
```typescript
for (let i: number = 0; i < 5; i++) {
    console.log(`Iterazione numero: ${i}`);
}
```

---

### **2. `for...of`**
Itera direttamente sugli **elementi** di una collezione (es. array o stringa).

#### Sintassi:
```typescript
for (let elemento of iterable) {
    // Codice da eseguire
}
```

#### Esempio:
```typescript
let numeri: number[] = [1, 2, 3, 4];
for (let numero of numeri) {
    console.log(numero); // Output: 1, 2, 3, 4
}
```

---

### **3. `for...in`**
Itera sulle **chiavi** di un oggetto o sugli **indici** di un array.

#### Sintassi:
```typescript
for (let chiave in oggetto) {
    // Codice da eseguire
}
```

#### Esempio:
```typescript
let oggetto = { nome: "Mario", eta: 30 };
for (let chiave in oggetto) {
    console.log(`${chiave}: ${oggetto[chiave]}`);
}
// Output: 
// nome: Mario
// eta: 30
```

---

### **4. `while`**
Ripete il blocco di codice finché una condizione è vera.

#### Sintassi:
```typescript
while (condizione) {
    // Codice da eseguire
}
```

#### Esempio:
```typescript
let i: number = 0;
while (i < 3) {
    console.log(`Contatore: ${i}`);
    i++;
}
```

---

### **5. `do...while`**
Esegue almeno una volta il blocco di codice, poi verifica la condizione.

#### Sintassi:
```typescript
do {
    // Codice da eseguire
} while (condizione);
```

#### Esempio:
```typescript
let i: number = 0;
do {
    console.log(`Eseguito almeno una volta, contatore: ${i}`);
    i++;
} while (i < 3);
```

---

### **6. Metodi avanzati per iterazioni su array**
In TypeScript, si possono usare metodi come `forEach`, `map`, `filter`, ecc., tipici di JavaScript.

#### Esempio con `forEach`:
```typescript
let numeri: number[] = [10, 20, 30];
numeri.forEach((numero) => console.log(numero));
```

---

### **Controllo del flusso nei cicli**
1. **`break`**: Interrompe l'esecuzione del ciclo.
   ```typescript
   for (let i = 0; i < 5; i++) {
       if (i === 3) break;
       console.log(i); // Output: 0, 1, 2
   }
   ```

2. **`continue`**: Salta alla successiva iterazione del ciclo.
   ```typescript
   for (let i = 0; i < 5; i++) {
       if (i === 2) continue;
       console.log(i); // Output: 0, 1, 3, 4
   }
   ```

---
