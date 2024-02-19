//question no1
const  jaweria  : string = " Hello jaweria"
console.log(jaweria)
//question no 2
const person : string =  "muskan"
console.log(person.toUpperCase())
console.log(person.toLowerCase())
//question no 3
const famous_quote : string = 'willam shakespare once said: "Be not afaird of greatness some are born great , some are achieve greatness thrust upon them"';
console.log(famous_quote)
//question no 4 
const famous_person : string = "Allama iqbal was a great poet"
console.log(famous_person)
//question 5
const person_name : string = "/t  Hassan"
console.log(person_name)
//question no 6
const addition : number = 5 + 3
console.log(addition)
const subtraction : number = 12 - 4
console.log(subtraction)
const divison : number = 16 / 2 
console. log(divison)
const multiply : number = 2 * 4
//question no 7 
console.log(4*2)
console.log(10-2)
console. log(5+3)
console.log(16/2)
//question no 8
const favorite_number : string = " My favorit  number is '4'"
console .log(favorite_number)
//question no 9
let names: string[] = ["Alice", "Bob", "Charlie"];

for (let name of names) {
    console.log(name);
}


for (let name of names) {
    console.log(`Hello, ${name}!`);
}
//question no 10
// Your Own Array
let transportation: string[] = ["car", "motorcycle", "bicycle"];

for (let vehicle of transportation) {
    console.log(`I would like to own a ${vehicle}.`);
}

// Guest List
let dinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}

// Changing Guest List
let unableToAttend = dinnerGuests.shift();
console.log(`${unableToAttend} can't make it.`);

let newGuest = "Nikola Tesla";
dinnerGuests.push(newGuest);

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}

// More Guests
console.log("Good news! We found a bigger dinner table.");

let newGuests: string[] = ["Leonardo da Vinci", "Galileo Galilei", "Ada Lovelace"];
dinnerGuests.unshift("Steve Jobs");
dinnerGuests.splice(2, 0, "Alan Turing");
dinnerGuests = dinnerGuests.concat(newGuests);

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}

// Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");

while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

dinnerGuests = [];
console.log("Our guest list is now empty:", dinnerGuests);

// Seeing the World
let placesToVisit: string[] = ["Japan", "Italy", "New Zealand", "Egypt", "Brazil"];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());

console.log("Original order (still intact):");
console.log(placesToVisit);

console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());

console.log("Original order (still intact):");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);

console.log("Sorted alphabetically:");
console.log(placesToVisit.slice().sort());

console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());

// Dinner Guests
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);

// Array of items
let mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// Object
let programmingLanguages: { [key: string]: string } = {
    "Python": "High-level programming language",
    "JavaScript": "Programming language commonly used for web development",
    "Java": "General-purpose programming language",
    "C++": "General-purpose programming language",
    "TypeScript": "Typed superset of JavaScript"
};

// Intentional Error
let testArray: number[] = [1, 2, 3];
// Accessing an index that doesn't exist to produce an index error
// console.log(testArray[10]); // This line would produce an index error

// Conditional Tests
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');

console.log("Is 5 greater than 3? I predict True.");
console.log(5 > 3);

console.log("Is 10 less than 2? I predict False.");
console.log(10 < 2);

console.log("Is 3 less than or equal to 3? I predict True.");
console.log(3 <= 3);

console.log("Is 6 greater than or equal to 8? I predict False.");
console.log(6 >= 8);

console.log("Is 'apple' in the array? I predict True.");
console.log(["apple", "banana", "orange"].includes("apple"));

console.log("Is 'grape' not in the array? I predict True.");
console.log(!["apple", "banana", "orange"].includes("grape"));

// More Conditional Tests
let string1: string = "hello";
let string2: string = "HELLO";
console.log("Are the strings equal? I predict False.");
console.log(string1 === string2.toLowerCase());

let number1: number = 10;
let number2: number = 5;
console.log("Is 10 greater than 5 and less than 20? I predict True.");
console.log(number1 > number2 && number1 < 20);

console.log("Is 10 less than 5 or greater than 20? I predict False.");
console.log(number1 < number2 || number1 > 20);

let testArray2: number[] = [1, 2, 3, 4, 5];
console.log("Is the number 3 in the array? I predict True.");
console.log(testArray2.includes(3));

console.log("Is the number 6 not in the array? I predict True.");
console.log(!testArray2.includes(6));

// Alien Colors #1
let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points!");
}

alien_color = 'red';
if (alien_color === 'green') {
    console.log("Player just earned 5 points!");
}

// Alien Colors #2
alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

alien_color = 'red';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

// Alien Colors #3
alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("player earned 0 point")
}





