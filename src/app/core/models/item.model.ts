export interface Item {
  rarity: number;
  name: string;
  description: string;
  value: number;
  carryLimit: number;
  recipes: Recipe[];
  icon: Icon;
  id: number;
  gameId: number;
}

interface Icon {
  id: number;
  kind: string;
  colorId: number;
  color: string;
}

interface Recipe {
  output: Output;
  amount: number;
  inputs: Input[];
  id: number;
}

interface Input {
  name: string;
  id: number;
}

interface Output {
  id: number;
}
