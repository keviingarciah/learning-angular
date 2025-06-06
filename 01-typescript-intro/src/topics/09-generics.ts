export function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatsMyType<string>("Hello Wolrd");
let amINumber = whatsMyType<number>(100);
let amIBoolean = whatsMyType<boolean>(true);

console.log(amIString.split(" "));
console.log(amINumber.toString());
console.log(amIBoolean.valueOf());
