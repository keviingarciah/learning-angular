function addNumber(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(a: number, b?: number, base: number = 2): number {
  return a * base;
}

const result: number = addNumber(1, 2);
const resultArrow: string = addNumbersArrow(1, 2);
const resultMultiply: number = multiply(5);

console.log({
  result,
  resultArrow,
  resultMultiply,
});

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const sofia: Character = {
  name: "Sofia",
  hp: 50,
  showHp() {
    console.log("HP: ", this.hp);
  },
};

sofia.showHp();
healCharacter(sofia, 20);
sofia.showHp();

export {};
