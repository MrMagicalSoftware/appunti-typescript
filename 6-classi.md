# classi in ts




In TypeScript, le **classi** sono una delle principali caratteristiche della programmazione orientata agli oggetti (OOP). Le classi consentono di creare oggetti con proprietà e metodi definiti. 

---

## **1. Classe Base**
Una classe può contenere proprietà e metodi. Si utilizza il costruttore per inizializzare le proprietà.

#### Esempio:
```typescript
class Persona {
    nome: string;
    eta: number;

    // Costruttore
    constructor(nome: string, eta: number) {
        this.nome = nome;
        this.eta = eta;
    }

    // Metodo
    saluta(): string {
        return `Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`;
    }
}

// Creazione di un'istanza
const mario = new Persona("Mario", 30);
console.log(mario.saluta());
```

---

## **2. Modificatori di Accesso**
### **Public, Private, Protected**
- `public`: Accessibile ovunque (valore predefinito).
- `private`: Accessibile solo all'interno della classe.
- `protected`: Accessibile all'interno della classe e delle sue sottoclassi.

#### Esempio:
```typescript
class Persona {
    public nome: string;
    private eta: number;

    constructor(nome: string, eta: number) {
        this.nome = nome;
        this.eta = eta;
    }

    // Metodo pubblico
    descrivi(): string {
        return `Sono ${this.nome} e ho ${this.getEta()} anni.`;
    }

    // Metodo privato
    private getEta(): number {
        return this.eta;
    }
}

const mario = new Persona("Mario", 30);
console.log(mario.descrivi());
// console.log(mario.eta); // Errore: 'eta' è privata
```

---

## **3. Classi con Parametri nel Costruttore**
È possibile dichiarare e inizializzare proprietà direttamente nel costruttore.

#### Esempio:
```typescript
class Auto {
    constructor(public marca: string, private anno: number) {}

    dettagli(): string {
        return `Questa è una ${this.marca} del ${this.anno}.`;
    }
}

const fiat = new Auto("Fiat", 2020);
console.log(fiat.dettagli());
// console.log(fiat.anno); // Errore: 'anno' è privata
```

---

## **4. Ereditarietà**
Le classi possono estendersi da altre classi per ereditare proprietà e metodi.

#### Esempio:
```typescript
class Persona {
    constructor(public nome: string, public eta: number) {}

    saluta(): string {
        return `Ciao, sono ${this.nome}.`;
    }
}

class Studente extends Persona {
    constructor(nome: string, eta: number, public corso: string) {
        super(nome, eta); // Chiama il costruttore della classe base
    }

    descrizione(): string {
        return `${this.saluta()} Studio ${this.corso}.`;
    }
}

const marco = new Studente("Marco", 20, "Informatica");
console.log(marco.descrizione());
```

---

## **5. Classi Astratte**
Le classi astratte definiscono un modello per altre classi e possono contenere metodi implementati o astratti (non implementati).

#### Esempio:
```typescript
abstract class Animale {
    constructor(public nome: string) {}

    abstract suono(): string; // Metodo astratto

    descrizione(): string {
        return `Questo è un ${this.nome}.`;
    }
}

class Cane extends Animale {
    suono(): string {
        return "Bau Bau!";
    }
}

const fido = new Cane("Cane");
console.log(fido.descrizione());
console.log(fido.suono());
```

---

## **6. Interfacce e Implementazioni**
Le classi possono implementare interfacce per garantire che rispettino una struttura.

#### Esempio:
```typescript
interface Veicolo {
    marca: string;
    velocita: number;

    dettagli(): string;
}

class Auto implements Veicolo {
    constructor(public marca: string, public velocita: number) {}

    dettagli(): string {
        return `Auto: ${this.marca}, Velocità: ${this.velocita} km/h.`;
    }
}

const auto = new Auto("Tesla", 200);
console.log(auto.dettagli());
```

---

## **7. Classi Statiche**
Le proprietà e i metodi statici appartengono alla classe stessa, non alle istanze.

#### Esempio:
```typescript
class Matematica {
    static pi: number = 3.14;

    static circonferenza(raggio: number): number {
        return 2 * this.pi * raggio;
    }
}

console.log(Matematica.pi); // 3.14
console.log(Matematica.circonferenza(5)); // 31.4
```

---

## **8. Getters e Setters**
Permettono di accedere e modificare proprietà con una sintassi simile a quella delle variabili.

#### Esempio:
```typescript
class Rettangolo {
    constructor(private _larghezza: number, private _altezza: number) {}

    get area(): number {
        return this._larghezza * this._altezza;
    }

    set larghezza(valore: number) {
        if (valore > 0) this._larghezza = valore;
    }
}

const rettangolo = new Rettangolo(5, 10);
console.log(rettangolo.area); // 50
rettangolo.larghezza = 8; // Modifica la larghezza
console.log(rettangolo.area); // 80
```

---

