# strutture di controllo

---

## **1. Array**
Gli array memorizzano una sequenza ordinata di elementi dello stesso tipo (o tipi misti, se definito).

#### Sintassi:
```typescript
let numeri: number[] = [1, 2, 3];
let misto: (number | string)[] = [1, "due", 3];
```

#### Operazioni comuni:
- **Accesso:** `numeri[0]` (restituisce il primo elemento).
- **Aggiunta:** `numeri.push(4)`.
- **Rimozione:** `numeri.pop()`.

---

## **2. Tuple**
Le tuple sono simili agli array ma con una lunghezza e un tipo fisso per ogni elemento.

#### Sintassi:
```typescript
let persona: [string, number, boolean] = ["Mario", 30, true];
```

#### Accesso:
```typescript
let nome: string = persona[0]; // "Mario"
```

#### Operazioni:
- **Aggiornamento:** `persona[1] = 31;`  
- **Metodi limitati rispetto agli array:** meglio evitare operazioni dinamiche come `push()` per preservare la struttura.

---

## **3. Oggetti**
Gli oggetti sono raccolte non ordinate di coppie **chiave-valore**.

#### Sintassi:
```typescript
let persona: { nome: string; eta: number } = { nome: "Luigi", eta: 25 };
```

#### Accesso:
```typescript
console.log(persona.nome); // "Luigi"
```

#### Aggiunta/Modifica:
```typescript
persona.eta = 26;
```

---

## **4. Enum**
Gli enumeratori (Enum) sono una raccolta di costanti con nomi leggibili.

#### Sintassi:
```typescript
enum Colore { Rosso, Verde, Blu }
let mioColore: Colore = Colore.Verde;
```

#### Esempio con valori personalizzati:
```typescript
enum Stato { InAttesa = 0, InCorso = 1, Completato = 2 }
let statoCorrente: Stato = Stato.InCorso;
```

---

## **5. Set**
Un Set è una raccolta di valori unici (nessun duplicato).

#### Sintassi:
```typescript
let numeri: Set<number> = new Set([1, 2, 3]);
numeri.add(4); // Aggiunge un elemento
numeri.has(2); // Verifica se contiene 2
numeri.delete(3); // Rimuove 3
```

#### Iterazione:
```typescript
for (let numero of numeri) {
    console.log(numero);
}
```

---

## **6. Map**
Una Map memorizza coppie **chiave-valore** dove le chiavi possono essere di qualsiasi tipo.

#### Sintassi:
```typescript
let rubrica: Map<string, string> = new Map();
rubrica.set("Mario", "123456789");
rubrica.set("Luigi", "987654321");
```

#### Accesso:
```typescript
console.log(rubrica.get("Mario")); // "123456789"
```

#### Iterazione:
```typescript
for (let [chiave, valore] of rubrica) {
    console.log(`${chiave}: ${valore}`);
}
```

---

## **7. WeakMap e WeakSet**
Queste strutture memorizzano oggetti con riferimenti deboli (non impediscono il garbage collection).

#### **WeakMap**:
```typescript
let wm: WeakMap<object, string> = new WeakMap();
let obj = {};
wm.set(obj, "valore associato");
```

#### **WeakSet**:
```typescript
let ws: WeakSet<object> = new WeakSet();
ws.add(obj);
```

---

## **8. Stack (Pila)**
Uno **stack** segue il principio LIFO (Last In, First Out).

#### Implementazione:
```typescript
class Stack<T> {
    private elementi: T[] = [];
    push(elemento: T): void {
        this.elementi.push(elemento);
    }
    pop(): T | undefined {
        return this.elementi.pop();
    }
    peek(): T | undefined {
        return this.elementi[this.elementi.length - 1];
    }
}

let stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
```

---

## **9. Queue (Coda)**
Una **queue** segue il principio FIFO (First In, First Out).

#### Implementazione:
```typescript
class Queue<T> {
    private elementi: T[] = [];
    enqueue(elemento: T): void {
        this.elementi.push(elemento);
    }
    dequeue(): T | undefined {
        return this.elementi.shift();
    }
}

let queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
```

---

## **10. Linked List**
Una lista collegata è una sequenza di nodi collegati tra loro.

#### Implementazione semplice:
```typescript
class Nodo<T> {
    valore: T;
    prossimo: Nodo<T> | null = null;
    constructor(valore: T) {
        this.valore = valore;
    }
}

class LinkedList<T> {
    testa: Nodo<T> | null = null;

    aggiungi(valore: T): void {
        const nuovoNodo = new Nodo(valore);
        if (!this.testa) {
            this.testa = nuovoNodo;
        } else {
            let corrente = this.testa;
            while (corrente.prossimo) {
                corrente = corrente.prossimo;
            }
            corrente.prossimo = nuovoNodo;
        }
    }
}

let lista = new LinkedList<number>();
lista.aggiungi(1);
lista.aggiungi(2);
```

---

## **11. Record**
Un **Record** associa chiavi specifiche a valori di un determinato tipo.

#### Sintassi:
```typescript
type Rubrica = Record<string, number>;
let contatti: Rubrica = { Mario: 123456, Luigi: 987654 };
```

---

## **12. Union e Intersection Types**
Usati per creare strutture dati più flessibili.

#### Union:
```typescript
type NumeroOStringa = number | string;
let valore: NumeroOStringa = 42;
valore = "quarantadue";
```

#### Intersection:
```typescript
type A = { nome: string };
type B = { eta: number };
type C = A & B;
let persona: C = { nome: "Mario", eta: 30 };
```

---




