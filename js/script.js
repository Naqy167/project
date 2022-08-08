"use strict"
let a = [];
a.push(1, 2, 3);
console.log(a);

let points = [
    {x:0, y:0},
    {x:1, y:1}
];


points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);
};

console.log(points.dist());

let arr = [1, 5, 7, -1]
const sum = 6;

arr.getRes = function(p1, p2, p3, p4){
    p1 = this[0];
    p2 = this[1];
    p3 = this[2];
    p4 = this[3];

}
// alert(arr);
// const result = confirm("Are you here&");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Ваше имя?", "");
// answers[1] = prompt("Где вы живете?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(answers);

// document.write(answers);

const user = 'Ivan';
alert(`привет, ${user}`);