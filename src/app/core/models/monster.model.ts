export interface Monster {
  size: Size;
  kind: string;
  species: string;
  name: string;
  description: string;
  ailments: any[];
  locations: Location[];
  resistances: Resistance[];
  weaknesses: Weakness[];
  rewards: Reward[];
  elements: any[];
  features: string;
  tips: string;
  baseHealth: number;
  variants: any[];
  parts: Part[];
  id: number;
  gameId: number;
}

interface Part {
  kind: string;
  monster: MonsterReference;
  multipliers: Multipliers;
  part: string;
  name: string;
  health: null | number;
  kinsectEssence: string;
  id: number;
}

interface Multipliers {
  slash: number;
  blunt: number;
  pierce: number;
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
  stun: number;
}

interface MonsterReference {
  id: number;
}

interface Reward {
  item: Item;
  conditions: Condition[];
  id: number;
}

interface Condition {
  kind: string;
  rank: string;
  quantity: number;
  chance: number;
  part: null | null | string;
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
  icon: Icon;
}

interface Icon {
  id: number;
  kind: string;
  colorId: number;
  color: string;
}

interface Weakness {
  element?: string;
  kind: string;
  level: number;
  condition: null;
  id: number;
  status?: string;
  effect?: string;
}

interface Resistance {
  effect: string;
  kind: string;
  condition: null;
  id: number;
}

interface Location {
  name: string;
  zoneCount: number;
  id: number;
  gameId: number;
}

interface Size {
  base: number;
  mini: number;
  silver: number;
  gold: number;
}
