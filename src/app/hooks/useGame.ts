import useLocalStorageGameState from './useLocalStorageGameState';

export const LOCAL_STORE_KEY = 'killer-dart-counter:players';

const useGame = () => {
  const [game, setGame] = useLocalStorageGameState(LOCAL_STORE_KEY, {});

  const clearGame = () => {
    window.localStorage.removeItem(LOCAL_STORE_KEY);
    setGame({});
  };

  const addPlayer = (name: string) => {
    setGame({
      ...game,
      [Object.keys(game).length + 1]: {
        name,
        section: 0,
        score: 0,
      },
    });
  };

  const changeName = (id: string) => (newName: string) =>
    setGame({ ...game, [id]: { ...game[id], name: newName } });

  const changeSection = (id: string) => (newSection: number) =>
    setGame({
      ...game,
      [id]: { ...game[id], section: newSection },
    });

  const changeScore = (id: string) => (newScore: number) =>
    setGame({ ...game, [id]: { ...game[id], score: newScore } });

  return {
    game,
    changeName,
    changeSection,
    changeScore,
    addPlayer,
    clearGame,
  };
};

export default useGame;
