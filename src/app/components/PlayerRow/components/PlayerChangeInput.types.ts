export type PlayerChangeInputProps = {
  inputType: 'text' | 'number';
  value: string | number;
  setGameState: (newGameState: string | number) => void;
};
