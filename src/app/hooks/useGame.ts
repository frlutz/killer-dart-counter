import { v4 as uuidv4 } from 'uuid'
import useLocalStorageGameState from './useLocalStorageGameState'

export const LOCAL_STORE_KEY = 'killer-dart-counter-v2:players'

const useGame = () => {
  const [game, setGame] = useLocalStorageGameState(LOCAL_STORE_KEY, {
    firstRound: true,
    players: [],
  })

  const clearGame = () => {
    window.localStorage.removeItem(LOCAL_STORE_KEY)
    setGame({ firstRound: true, players: [] })
  }

  const resetGame = () => {
    setGame({
      firstRound: true,
      players: game.players.map(player => ({
        ...player,
        section: 0,
        score: 0,
      })),
    })
  }

  const firstRoundPassed = () => {
    setGame({ ...game, firstRound: false })
  }

  const addPlayer = (name: string) => {
    const newPlayer = {
      id: uuidv4(),
      name,
      section: 0,
      score: 0,
    }

    setGame({
      ...game,
      players: [...game.players, newPlayer],
    })
  }

  const removePlayer = (id: string) => {
    setGame({
      ...game,
      players: game.players.filter(player => player.id !== id),
    })
  }

  const changeName = ({ id, newName }: { id: string; newName: string }) => {
    if (newName === '') return

    const updatedPlayers = game.players.map(player =>
      player.id === id ? { ...player, name: newName } : player
    )

    setGame({ ...game, players: updatedPlayers })
  }

  const changeSection = ({
    id,
    newSection,
  }: {
    id: string
    newSection: number
  }) => {
    const updatedPlayers = game.players.map(player =>
      player.id === id ? { ...player, section: newSection } : player
    )

    setGame({ ...game, players: updatedPlayers })
  }

  const changeScore =
    ({ id }: { id: string }) =>
    ({ newScore }: { newScore: number }) => {
      const updatedPlayers = game.players.map(player =>
        player.id === id ? { ...player, score: newScore } : player
      )

      setGame({ ...game, players: updatedPlayers })
    }

  return {
    addPlayer,
    changeName,
    changeScore,
    changeSection,
    clearGame,
    firstRoundPassed,
    game,
    removePlayer,
    resetGame,
  }
}

export default useGame
