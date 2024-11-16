import { Player } from '../../hooks/useGame.types'

export type PlayerChangeDrawerProps = {
  player: Player | null
  changeName: ({ id, newName }: { id: string; newName: string }) => false | void
  changeSection: (id: string, newSection: number) => void
  removePlayer: (id: string) => void
}
