/* Lexical scope & readonly*/
class Person {
  constructor(private age: number, readonly phno: number, test?: string) {}
  updateAge = () => {
    this.age = this.age + 1;
  };
  getAge() {
    return this.age;
  }
}

const personObj = new Person(19, 9898);
personObj.updateAge();
const updateAge = personObj.updateAge;
updateAge();
console.log(personObj.getAge());

/* Union type */
let mssg: string | null | undefined = "0";

function formate(input: string | string[]) {
  if (typeof input === "string") {
    return input.trim();
  } else {
    return input.map((x) => x.trim());
  }
}
console.log(formate("vamsi "));
console.log(formate(["vamsi ", " krishna"]));

/* Literal type */
type CordinalDirections = "North" | "South" | "East" | "West";
let directions: CordinalDirections;
directions = "East";

type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;

function roolingDices() {
  return Math.floor(Math.random() * 10) as DiceValues;
}

console.log(roolingDices());

class Cat {
  meom() {
    console.log("Cat");
  }
}

class Dog {
  bark() {
    console.log("Dog");
  }
}

type Animal = Cat | Dog;

function speck(animal: Animal) {
  if (animal instanceof Cat) {
    animal.meom();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

speck(new Cat());
speck(new Dog());
