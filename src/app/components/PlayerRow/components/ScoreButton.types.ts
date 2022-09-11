export type ScoreButtonProps = {
  score: number;
  operation: 'increment' | 'decrement';
  changeScore: (newScore: number) => void;
  flashCallback: () => void;
};
