const skills: string[] = ["Bash", "Taunted", "Healing"];

interface Character {
  name: string;
  hp: number | "FULL";
  skills: string[];
  hometown?: string;
}

const sofia: Character = {
  name: "Sofia",
  hp: 100,
  skills: ["Bash", "Taunted", "Healing"],
};

sofia.hometown = "1ro. de Julio";

console.table(sofia);

export {};
