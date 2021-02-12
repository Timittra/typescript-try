let age:number = 25; 
let club:string = 'FC Barcelona'; 
// const isFamous: boolean; error as value is not set
const isFamous: boolean = false; 
let famous: boolean; 
famous = true; 

function add(num1:any, num2:number | string){
    return num1 + num2; 
}

add(20, 50); 
add('food','good'); 

function doubleItAndConsole(num: number): void{
    const result = num * 2; 
    console.log(result); 
}

const output:void = doubleItAndConsole(10);
console.log('output', output); 

function fullName(firstName:string, lastName:string): string{
    return firstName + " " + lastName; 
}

const user:string = fullName('Martin', 'Rock'); 

let multiply2: (x:number, y:number) => number ;

multiply2 = (x, y) => x * y; 

const multiply = (x:number, y:number):number => x * y;

console.log(multiply(25, 6)); 

const numbers: number[] = [2, 4, 6, 8, 10, 88, 12]; 
numbers.push(22); 

const friends: string[]= ['Shajuti', 'Islam', 'Shashi', 'Timittra', 'Hridi', 'Noholi', 'Duti'];
let megaFriend:string = ''; 
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if(friend.length > megaFriend.length){
        megaFriend = friend; 
    }
}

console.log("Friend with the largest name: ", megaFriend); 

const friend:{name:string, age:number} = {
    name: 'Manual David',
    age: 61
}

let player: { //structure type
    club: string, 
    salary: number
}  = { // object of value
    club: 'Real Madrid', 
    salary: 450000000
}

interface Player {
    club:string, 
    name:string, 
    salary:number, 
    wife?:string, 
    isPlaying:boolean
}

const messi:Player = {
    club: 'FC Barcelona',
    name: 'Leonel Messi',
    salary: 45000000, 
    wife: 'Antonila',
    isPlaying: true
}

const ronaldo:Player = {
    club: 'Real Madrid',
    name: 'Christianio Ronaldo',
    salary: 51000000,
    isPlaying: true
}

function getBonus(player: Player, friends:string[]){
    return player.salary * 0.1; 
}

const poorPlayer = {age:20, salary:20000}; 

getBonus(messi, ['Hridi']); 

class Person{
    name: string; 
    private _partner: string; 
    readonly fatherName: string; 
    constructor(name:string, father:string){
        this.name = name; 
        this._partner = name;
        this.fatherName = father; 
    }
    getName(): string{
        return this.name; 
    }
}

const sam = new Person('Samuel', 'David');

console.log('name', sam.name, sam.fatherName); 
const samName:string = sam.getName();

// father name can not be changeable as it is readonly 