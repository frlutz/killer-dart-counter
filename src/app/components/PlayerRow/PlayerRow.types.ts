import { Player } from '../../hooks/useGame.types'

export type PlayerRowProps = {
  player: Player
  changeScore: ({ newScore }: { newScore: number }) => void
  setCurrentPlayer: (player: Player) => void
  setIsPlayerChangeDrawerOpen: (open: boolean) => void
}
