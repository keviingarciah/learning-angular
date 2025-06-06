function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty: string = "newProperty";
    hello: string = "world";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "myProperty";

  print() {
    console.log("SuperClass print");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
