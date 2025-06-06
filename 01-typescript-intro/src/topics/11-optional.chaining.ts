export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "John",
  children: ["Alice", "Bob"],
};

const passenger2: Passenger = {
  name: "Jane",
};

const returnChildrenNumber = (passenger: Passenger): Number => {
  const howManyChildren = passenger.children?.length ?? 0;

  console.log(howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger1); // 2
returnChildrenNumber(passenger2); // 0
