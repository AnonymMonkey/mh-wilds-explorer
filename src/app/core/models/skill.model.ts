export interface Skill {
  name: string;
  kind: string;
  description: string;
  ranks: Rank[];
  icon: Icon;
  id: number;
  gameId: number;
}

interface Icon {
  id: number;
  kind: string;
}

interface Rank {
  skill: SkillReference;
  level: number;
  name: null;
  description: string;
  id: number;
}

interface SkillReference {
  id: number;
}
