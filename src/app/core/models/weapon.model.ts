export interface Weapon {
  coatings: string[];
  gameId: number;
  crafting: Crafting;
  rarity: number;
  kind: string;
  damage: Damage;
  specials: any[];
  name: string;
  description: string;
  defenseBonus: number;
  elderseal: null;
  slots: any[];
  affinity: number;
  skills: any[];
  series: Series;
  id: number;
}

interface Series {
  id: number;
  gameId: number;
  name: string;
}

interface Damage {
  raw: number;
  display: number;
}

interface Crafting {
  weapon: WeaponReference;
  craftable: boolean;
  previous: null;
  branches: Branch[];
  craftingMaterials: any[];
  craftingZennyCost: number;
  upgradeMaterials: any[];
  upgradeZennyCost: number;
  column: number;
  row: number;
  id: number;
}

interface Branch {
  name: string;
  id: number;
}

interface WeaponReference {
  id: number;
}
