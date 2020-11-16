let currentTempC = 22;
currentTempC2 = 22.5;

let targetTempC;
let targetTempC, room1 = "conference_room_a", room2 = "lobby";

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

let room1 = "conference_room_a";
let currentRoom = room1;
currentRoom = conference_room_a; // 에러

let count = 10;         // 더블
const blue = 0x0000ff;  // 16진수
const umask = 0o0022;   // 8진수
const roomTemp = 21.5;  // 10진수
const c = 3.0e6;        // 지수 표기법
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;        // '숫자가 아님'

const small =  Number.EPSILON;          // 1을 더했을 때 1과 구분하는 결과를 만들 수 있는 가장 작은 값 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE;           // 표현할 수 있느 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE;           // 표현할 수 있는 가장 작은 숫자
const nInf = Number.NEGATIVE_INFINITY   // -Infinity
const nan = Number.NaN;                 // NaN
const inf = Number.POSITIVE_INFINITY    // Infinity

const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";

const dialog = "Sam looked up and said "don't do that!" to Max";

const dialog1 = "He looked up and said \"don't do that\" to Max";
const dialog2 = 'He looked up and said "dont\'t do that" to Max';

const s = "In JavaScript, use \\ as an escape character in strings";

let currentTemp = 19.5;
const message = "The current temperature is " + currentTemp + "\u00B0C";
const message2 = `The current temperature is ${currentTemp}\u00B0C`;

const multiline = "line1\n" +
    "line2\n" +
    "line3";

const multiline2 = `Current temperature:\n`+ 
    `\t${currentTemp}\u00b0C\n`+
    "Don't worry... the heat is on!";

const result1 = 3 + '30';
const result2 = 3 * '30';

let heating = true;
let cooling = false;

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE // false

let currentTemp; // undefined 
const targetTemp = null; // null
currentTemp = 19.5;
currentTemp = undefined; // 초기화되지 않음. 권장 X

const obj = {};

obj.color="yellow";

obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // yellow;

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = {name: 'Sam', age: 4};

const sam3 = {
    name: 'Sam',
    classification: {        // 프로퍼티 값도 객체가 될 수 있다.
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

sam3.classification.family;
sam3["classification"].family;
sam3.classification["family"];
sam3.classification["family"];
sam3["classification"]["family"];

sam3.speak = function(){return "Meow!";};
sam3.speak();

delete sam3.classification;
delete sam3.speak;

const s = "hello";
s.toUpperCase();

s.rating=3;
s.rating; // undifined

const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "What the hammer? What the chain?",
    "In What furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dard its deadly terrors clasp?"
];
const a4 = [
    { name:"Ruby", hardness: 9 },
    { name:"Diamond", hardness: 10 },
    { name:"Topaz", hardness: 8 },
];
const a5 = [
    [1, 3, 5],
    [2, 4, 6],
]

const arr = ['a', 'b', 'c'];
arr.length // 3

const arr = ['a', 'b', 'c'];
arr[0];  // 'a'
arr[arr.length - 1]; // 'c'

const arr = [1, 2, 'c', 4, 5];
arr[2] = 3;

const now = new Date();
now; 

const halloween = new Date(2016, 9, 31);

const halloweenParty = new Date(2016, 9, 31, 19, 0);

halloweenParty.getFullYear();     // 2016
halloweenParty.getMonth();        // 9
halloweenParty.getDate();         // 31
halloweenParty.getDay();          // 1
halloweenParty.getHours();        // 19
halloweenParty.getMinutes();      // 0
halloweenParty,getSeconds();      // 0
halloweenParty.getMilliseconds(); // 0

const email = /\b[a-z0-9._-]+0[a-z_-]+(?:\.[a-z]+)+\b/;
const phone = /(:?+1)?(:?\d{3}\)\sd{3}[\s-]?)\d{3}[\s-]?\d{4}/;

const numStr = "33.3";
const num = Number(numStr); // 이 행은 숫자 값을 만들며, Number 객체의 인스턴스를 만드는 것이 아니다.

const a = parseInt("16 volts", 10);
const b = parseInt("3a", 16);
const c = parseFloat("15.5 kph");

const d = new Date();
const ts = d.valueOf();

const b = true;
const n = b ? 1 : 0;

const n = 33.5;
n;                       // 33.5
const s = n.toString();
s;                       // "33.5"
 
const arr = [1, true, "hello"];
arr.toString();                   // "1,true,hello"

const n = 0;
const b1 = !!n;
const b2 = Boolean(n);

let a = 1;
let b = a;
a = 2;
console.log(b)     // 1

a === 2     // true

function change (a) {
    a = 5;
}

a = 3;
change(a);
console.log(a);    // 3  

let o = {a:1};
let p = o;
o.a = 2;
console.log(p);   // {a:2}

let o = {a: 1};
let p = o;
p === o;   // true
o = {a: 2}; 
p === o;   // false
console.log(p) // {a:1}

let q = {a: 1};
q === {a: 1}    // false;

function change_o (o) {
    o.a = 999;
}

let o = {a: 1};
change_o(o);
console.log(o)   // {a: 999}

