import { Player } from '../../hooks/useGame.types'

export type PlayerChangeDrawerProps = {
  changeName: ({ id, newName }: { id: string; newName: string }) => false | void
  changeSection: ({
    id,
    newSection,
  }: {
    id: string
    newSection: number
  }) => void
  player: Player | null
  removePlayer: (id: string) => void
  setIsPlayerChangeDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}
