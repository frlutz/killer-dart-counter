export type Player = {
  name: string;
  section: number;
  score: number;
};

export type Game = Record<string, Player>;
