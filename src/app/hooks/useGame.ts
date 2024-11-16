import useLocalStorageGameState from './useLocalStorageGameState'

export const LOCAL_STORE_KEY = 'killer-dart-counter:players'

const useGame = () => {
  const [game, setGame] = useLocalStorageGameState(LOCAL_STORE_KEY, {})

  const clearGame = () => {
    window.localStorage.removeItem(LOCAL_STORE_KEY)
    setGame({})
  }

  const resetGame = () => {
    setGame(
      Object.values(game).reduce(
        (acc, player) => ({
          ...acc,
          [Object.keys(acc).length]: { ...player, section: 0, score: 0 },
        }),
        {}
      )
    )
  }

  const addPlayer = (name: string) => {
    setGame({
      ...game,
      [Object.keys(game).length]: {
        id: `${Object.keys(game).length}`,
        name,
        section: 0,
        score: 0,
      },
    })
  }

  const removePlayer = (id: string) => {
    setGame(
      Object.values(game)
        .filter((_, index) => +id !== index)
        .reduce(
          (acc, player) => ({
            ...acc,
            [Object.keys(acc).length]: player,
          }),
          {}
        )
    )
  }

  const changeName = ({ id, newName }: { id: string; newName: string }) => {
    console.log(newName)
    return (
      newName !== '' &&
      setGame({ ...game, [id]: { ...game[id], name: newName } })
    )
  }

  const changeSection = (id: string, newSection: number) =>
    setGame({
      ...game,
      [id]: { ...game[id], section: newSection },
    })

  const changeScore = (id: string) => (newScore: number) =>
    setGame({ ...game, [id]: { ...game[id], score: newScore } })

  return {
    game,
    changeName,
    changeSection,
    changeScore,
    addPlayer,
    clearGame,
    resetGame,
    removePlayer,
  }
}

export default useGame
