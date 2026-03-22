// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// arr1.sayHello = () => {
//     console.log("Hello from array!");
// };

// arr2.sayHello = () => {
//     console.log("Hello from array!");
// };

// arr1.sayHello === arr2.sayHello; // false => because sayHello is created separately for both arrays

//+++++++++++++++++++++++++++++++++++++++++++++
//FACTORY F^n
// function personMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         },
//     };
//     return person;
// }
// let p1 = personMaker("Smith", 23);
// let p2 = personMaker("Aman", 25);

// p1.talk();
// p2.talk();

// p1.talk === p2.talk; //false => because talk() is created separately for both objects

//++++++++++++++++++++++++++++++++++++++++++++++++
//Prototype Function 
//New Operator 
//Constructor F^n - doesn't return anything & starts with capital letter & used with 'new' keyword
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }

// let p1 = new Person("Smith", 23);
// let p2 = new Person("Aman", 25);

// p1.talk === p2.talk;// true
 
//+++++++++++++++++++++++++++++++++++++++++++++++++
//Classes - syntactical sugar over prototype function
class Person {
    constructor(name, age) {
        console.log("Constructor called");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// let p1 = new person("Smith", 23);
// let p2 = new person("Aman", 25);

// p1.talk === p2.talk; //true => because talk() is in prototype of class person
// p1.talk();


//Inheritance
class Employee extends Person {
    constructor(name, age, empId) {
        console.log("Employee constructor called");
        super(name, age); //calls parent class constructor
        this.empId = empId;
    }
}

// let e1 = new Employee("John", 28, "E123");

class Manager extends Person {
    constructor(name, age, dept) {
        console.log("Manager constructor called");
        super(name, age);//calls parent class constructor
        this.dept = dept;
    }
}

// let m1 = new Manager("Alice", 35, "Sales");
// m1.talk();

//+++++++++++++++++++++++++++++++++++++++++++++++++
class Mammal {//Base Class or Parent Class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
    walk() {
        console.log("I am walking");
    }
}

class Dog extends Mammal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!");
    }

    eat() {
        console.log("Dog is eating"); //Method overriding
    }
}

class Cat extends Mammal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log("Meow! Meow!");
    }
}
