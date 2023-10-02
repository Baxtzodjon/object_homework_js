let students = [
    {
        name: "baxtzod",
        age: 15,
        isMarried: false,
        hair_color: "blue"
    },
    {
        name: "islom",
        age: 15,
        isMarried: true,
        hair_color: "red"
    },
    {
        name: "safir",
        age: 15,
        isMarried: false,
        hair_color: "lisiy"
    },
    {
        name: "abdumanon",
        age: 13,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "xojimurod",
        age: 16,
        isMarried: true,
        hair_color: "pink"
    },
    {
        name: "aziza soliyeva",
        age: 15,
        isMarried: true,
        hair_color: "green"
    },
    {
        name: "aziza",
        age: 15,
        isMarried: false,
        hair_color: "skyblue"
    },
    {
        name: "ismoil",
        age: 12,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "artyom",
        age: 14,
        isMarried: false,
        hair_color: "purple"
    },
    {
        name: "abdukhafiz",
        age: 17,
        isMarried: false,
        hair_color: "white"
    },
    {
        name: "bobur",
        age: 18,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "shoxa",
        age: 17,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "alSafir",
        age: 15,
        isMarried: true,
        hair_color: "orange"
    },
]


// 1. Отсортировать массив по нарастанию возраста
let sortedStudents = students.sort((a, b) => a.age - b.age);
console.log(sortedStudents);


// 2. Распледелить женатых и не женатых в разные массивы должны быть только имена
let unmarriedStudents = students.filter(student => !student.isMarried).map(student => student.name);
let marriedStudents = students.filter(student => student.isMarried).map(student => student.name);

console.log(unmarriedStudents);
console.log(marriedStudents);


// 3. Найти самого старшего
let max = Math.max(...students.map(item => item.age)) || null;
let res = students.filter(item => max && item.age == max);
console.log(res);


// 4. Найти самого младшего
let min = Math.min(...students.map(item => item.age)) || null;
let resultat = students.filter(item => min && item.age == min);
console.log(resultat);