// Ans of no 1

function Parent(name){
    this.name = name;
}
Parent.prototype.greet =function(){
    return `Hello,I am ${this.name}!`
};
function Child(name,age){
    Parent.call(this,name);
    this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.introduce = function(){
    return `Hi I am ${this.name} and I am ${this.age} year old.`;

}
const parent = new Parent('OM')
const child = new Child('Ginni',10)

let ques1 = document.getElementById("q1")
ques1.textContent = parent.greet() + '' + child.greet() + ' ' + child.introduce();
console.log(ques1)

// Ans of no 2

function Animal(name){
    this.name = name;
}
Animal.prototype.sayHello = function(){
    return `Hello I am ${this.name} `
}
function Dog(name,bread){
    Animal.call(this,name)
    this.bread = bread
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function(){
    return `${this.name} is fetchinh the ball. `
}
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy","Golden Retriever")

const ques2 = document.getElementById("q2")
ques2.textContent = animal.sayHello() + '' + dog.sayHello() + '' + dog.fetch();
console.log(ques2)

// Ans of no 3

Array.prototype.calculateSum = function(){
    return this.reduce((total,current) => total + current , 0)
};
const array1 = [1,2,3,4,5];
const array2 = [10,20,30,40,50];
const array3 = [5,10,15,20,25];

const sum1 = array1.calculateSum();
const sum2 = array2.calculateSum();
const sum3 = array3.calculateSum();

const ques3 = document.getElementById("q3")
ques3.textContent = `Sum of array1: ${sum1}\n Sum of array2: ${sum2}\n Sum of array3: ${sum3}\n`;

// Ans of no 4

function getAllPropertyNames(obj) {
  const propertyNames = [];

  let currentObj = obj;
  while (currentObj !== null) {
    propertyNames.push(...Object.getOwnPropertyNames(currentObj));
    currentObj = Object.getPrototypeOf(currentObj);
  }
  
  return propertyNames;
}
const sampleObject = {
  prop1: 'value1',
  prop2: 'value2'
};

const inheritedObject = Object.create(sampleObject);
inheritedObject.prop3 = 'value3';

const propertyNamesSample = getAllPropertyNames(sampleObject);
const propertyNamesInherited = getAllPropertyNames(inheritedObject);


const ques4= document.getElementById('q4');
ques4.textContent = `Property names of sampleObject: ${propertyNamesSample}\nProperty names of inheritedObject: ${propertyNamesInherited}`;
console.log(ques4)
