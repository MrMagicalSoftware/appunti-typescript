# appunti-typescript


Fonte Video
https://www.youtube.com/watch?v=BCg4U1FzODs



Installare l’ambiente di Sviluppo :

> sudo npm i -g typescript

Controllare tsc -v

Per compilare  :

> tsc –watch index

Per creare un file di configurazione iniziale : tsc –init
Posso specificare la cartella di destinazione  e la cartella di source



Basic types :

let id : number = 5
let company : string = 'TraversY media’
let isPublished : boolean = true
let x : any


Per creare array :
let ids  : number  [] = [ 1 , 2 , 3 ,4 ,5 ]

Tuple
let person = [numeber , string , boolean] = [1 , 'brad’ , true]


Tuple Array

let employee : [ number , string] [] 

employee = [
	[1 , 'Brad’],
	[2 , 'Gin’],
	[3,'Pin']
]


Unions

let pid : string | number = 22

Con  unions posso specificare e dire che la variabile pid può assumere come valori sia il tipo string che il tipo number

pid = '44'



Enum

enum Direction1  {	
	UP = 1,
	Down.
	Left,
	Right
}

console.log(Direction1.Up ) // 1
console.log(Direction1.Down ) // 2


enum Direction1  {	
	UP = "Up",
	Down = "Down",
	Left = "Left",
	Right
}





Object

Posso specificare come deve 
essere fatto il tipo di dato

const user: {
    id:number,  
    name : string

} = {
    id:1,
    name:"Jon"
}

Potrei usare il type:

type User = {
    id:number,
    name:string
}

const myUser : User = {
    id:44,
    name:"whhwhwhwh"
}


Type Assertion

let cid : any = 1
let customerId = <number> cid
//let customerId = cid as number  <---Altra opzione



Funcion

function addNum(x : number , y : number): number {
    return x + y 
}


La funzione prende in ingresso string e numeri
function stampaLog(message : string | number) : void {
    console.log(message)
}

Interfaces

interface UserInterface {
    readonly id : number
    name : string
    age?:number  // Opzionale
}

const myUser1 : UserInterface = {
    id :1,
    name:'John',
   
}


Differenza tra interface e Type

interface Point = number | string  //---> Errore
type Point = number | string


interface MathFunc {
    (x :number , y :number) : number
}

const add : MathFunc = (x : number , y : number) : number => x + y


##Classes

class Person
{
	
	private id: number
	protected name : string
    	
	constructor(id:number , name:string){
        	this.id = id
        	this.name = name
    	}
}

const brad = new Person(1 ,"hh")

#Esempio uso di Interface

interface PersonInterface {
    
    id : number
    name:string

    //metodi
    register():string | number
}

	
	
	
class MyPerson implements PersonInterface {
    
	id: number
    	name: string

    	register(): string {
        	throw new Error("Method not implemented.")
    	}
}



#Uso di Extends

class Employee extends Person
{
    position : string

    constructor(id : number , name:string , position : string){
        super(id , name)
        this.position = position
    }
}

const emp = new Employee(1 , "jj" , "admin")
console.log(emp);



Generics

function getArray<T>(items : T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1 , 2 , 3 ,4])
let stringArray = getArray<string>(['dd', 'jj' ,'gg'])

avendo aggiunto i generic 
passando da any a generics questo
mi da errore numArray.push('hello')


USARE TypeScript con React

> npx create-react-app . --temaple typescript
> npm start

Esempio mi creo un file Header.tsx



export interface Props {
    title : string
    color?:string
}


const Header = (props : Props) =>{
    return (
        <header>
            <h1 style={{color:props.color ? props.color : 'blue'}}>{props.title}</h1>
        </header>
    )
}

export default Header

