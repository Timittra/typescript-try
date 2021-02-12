"use strict";
let age = 25;
let club = 'FC Barcelona';
// const isFamous: boolean; error as value is not set
const isFamous = false;
let famous;
famous = true;
function add(num1, num2) {
    return num1 + num2;
}
add(20, 50);
add('food', 'good');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Martin', 'Rock');
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
const numbers = [2, 4, 6, 8, 10, 88, 12];
numbers.push(22);
const friends = ['Shajuti', 'Islam', 'Shashi', 'Timittra', 'Hridi', 'Noholi', 'Duti'];
let megaFriend = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log("Friend with the largest name: ", megaFriend);
const friend = {
    name: 'Manual David',
    age: 61
};
let player = {
    club: 'Real Madrid',
    salary: 450000000
};
const messi = {
    club: 'FC Barcelona',
    name: 'Leonel Messi',
    salary: 45000000,
    wife: 'Antonila',
    isPlaying: true
};
const ronaldo = {
    club: 'Real Madrid',
    name: 'Christianio Ronaldo',
    salary: 51000000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 20, salary: 20000 };
getBonus(messi, ['Hridi']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
// father name can not be changeable as it is readonly 
