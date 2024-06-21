/* DataTypes */
let msg: string = "message";
let num: number = 123;
let flag: boolean = true;
let notDefined: undefined = undefined;
let nullCheck: null = null;
let star: symbol = Symbol("star");
let largeNum: bigint = 24n;

let numArray: number[] = [1, 2, 3];
let stringArray: string[] = ["vamsi", "Tejaswi", "Harshavardhan", "Hoshvik"];
let tupleCollection: [number, string] = [1, "one"];

type PersonType = { name: string; age: number };
let personDetails: PersonType = {
  name: "Vamsi",
  age: 30,
};

/* Functions */
function dispalyMsg(name: string): void {
  console.log("Hello", name);
}

function add(x: number, y: number): number {
  return x + y;
}

const adding = (x: number, y: number): number => x + y;

type AdditionType = (x: number, y: number) => number;

const addition: AdditionType = (x, y) => x + y;

/* Classes */
class Employe {
  protected name: string;
  protected dob: string;
  protected gender: string;
  protected role: string;
  constructor(name: string, dob: string, gender: string, role: string) {
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.role = role;
  }

  protected salaryCalculate(amount: number): number {
    return amount;
  }
}

class FullTimeEmploye extends Employe {
  salaryCalculate(amount: number): number {
    return amount * 10;
  }
}

class PartTimeEmploye extends Employe {
  salaryCalculate(amount: number): number {
    return amount * 5;
  }
}

const partTime = new PartTimeEmploye("v", "15", "male", "it");
partTime.salaryCalculate(1);

/* Generics */
class Queue<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.pop();
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);
console.log(queue.data);
console.log(queue.pop());

/* Special types */
let person: any = "10";
let personName: unknown = "Ravi";
(personName as string).trim();

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

const point2D: Point2D = { x: 10, y: 20 };
const point3D: Point3D = { x: 10, y: 20, z: 30 };

function twoDim(dim: Point2D): void {
  console.log(dim.x, dim.y);
}
twoDim(point2D);
twoDim(point3D);

function threeDim(dim: Point3D): void {
  console.log(dim.x, dim.y, dim.z);
}
threeDim(point3D);
//threeDim(point2D); // will not work because of parameters missing
