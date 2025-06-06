export class Person {
  // public name: string;
  // private adress: string;

  constructor(public name: string, private address: string) {
    this.name = name;
    this.address = address;
  }
}

/* 
export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "New York");
  }
} 
*/

export class Hero {
  //public person: Person

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName, "New York");
  }
}

const tony = new Person("Tony Stark", "New York");
const ironMan = new Hero("IronMan", 45, "Tony Stark", tony);

console.log(ironMan);
