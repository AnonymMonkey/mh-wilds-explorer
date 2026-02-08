export interface Armor {
  kind: string;
  name: string;
  description: string;
  rank: string;
  rarity: number;
  resistances: Resistances;
  defense: Defense;
  skills: Skill2[];
  slots: number[];
  armorSet: ArmorSet;
  crafting: Crafting;
  id: number;
}

interface Crafting {
  armor: ArmorReference;
  materials: Material[];
  zennyCost: number;
  id: number;
}

interface Material {
  item: Item;
  quantity: number;
  id: number;
}

interface Item {
  id: number;
  gameId: number;
  rarity: number;
  name: string;
  description: string;
  value: number;
  carryLimit: number;
  recipes: any[];
  icon: Icon2;
}

interface Icon2 {
  id: number;
  kind: string;
  colorId: number;
  color: string;
}

interface ArmorReference {
  id: number;
}

interface ArmorSet {
  id: number;
  name: string;
}

interface Skill2 {
  skill: Skill;
  level: number;
  name: null;
  description: string;
  id: number;
}

interface Skill {
  id: number;
  gameId: number;
  name: string;
  kind: string;
  icon: Icon;
}

interface Icon {
  id: number;
  kind: string;
}

interface Defense {
  base: number;
  max: number;
}

interface Resistances {
  fire: number;
  water: number;
  ice: number;
  thunder: number;
  dragon: number;
}
