import useLocalStorageState from './useLocalStorageState';

export const LOCAL_STORE_KEY = 'killer-dart-counter:players';

const useGame = () => {
  const [game, setGame] = useLocalStorageState(LOCAL_STORE_KEY, {});

  const clearGame = () => {
    window.localStorage.removeItem(LOCAL_STORE_KEY);
    setGame({});
  };

  const addNewPlayer = (playerName) => {
    setGame({
      ...game,
      [Object.keys(game).length + 1]: {
        name: playerName,
        dartNumber: 0,
        points: 0,
      },
    });
  };

  const changePlayerName = (id, newName) => {
    setGame({ ...game, [id]: { ...game[id], name: newName } });
  };

  const changeSection = (id, newDartNumber) => {
    setGame({
      ...game,
      [id]: { ...game[id], dartNumber: newDartNumber },
    });
  };

  const changePlayerPoints = (id, newPoints) => {
    setGame({ ...game, [id]: { ...game[id], points: newPoints } });
  };

  return {
    players: game,
    changePlayerName,
    changeSection,
    changePlayerPoints,
    addNewPlayer,
    clearGame,
  };
};

export default useGame;
