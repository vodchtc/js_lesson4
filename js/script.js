//1)
let student = {
    name: "Darya",
    surname: "Vodchits",
    age: 22,
    course: "frontend",
    englishLvl: "intermediate",
};

delete student["englishLvl"];

console.log(student);

//2)
let book = {
    numberOfPages: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    booksEditions: 20000000,
}
for (let key in book) {
    if (typeof book[key] === "boolean") {
        console.log(key)
    }
}

//3)
let car = {
    brand: "bmw",
    color: "black",
    numberOfDoors: 4,
    horsepower: 265,
    engineСapacity: 3.0,
    typeOfGearbox: "ZF8hp",
};
let clone = {};
for (let key in car) {
    clone[key] = car[key];
}


Object.assign(clone, car);

console.log(car);

//4)
let animalObj = {
    name: "cat",
    legs: 4,
    color: "black",
}

function showMe(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`
}

console.log(showMe({
    color: 'black',
    name: 'cat',
    legs: 4,
}));


//5) 
let train = {
    locomotiveLength: 25,
    totalCoachCars: 4,
    coachLength: 15,
}

function calcNumbersOfTrain(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key];
        }
    }
    return sum;
}

let result = calcNumbersOfTrain(train);
console.log(result);

//6)
const studentObj = {
    name: 'Андрей',
    surname: 'Иванов',
    groupNumber: '133',
    getInfo: function() {
        return `Это студент ${this.name} ${this.surname} из группы ${this.groupNumber}`
    }
}
console.log(studentObj.getInfo());

//7)

function Animal(animal, legs, isPredator, name) {
    this.animal = animal;
    this.legs = legs;
    this.isPredator = isPredator;
    this.name = name;
}

const cat = new Animal('кот', 4, true, 'Барсик');
console.log(cat);