import { Player } from '../../hooks/useGame.types';

export type PlayerRowProps = {
  id: string;
  player: Player;
  changeName: (newName: string) => void;
  changeSection: (newSection: number) => void;
  changeScore: (newScore: number) => void;
};
