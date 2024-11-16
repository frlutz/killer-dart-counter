import { Player } from './hooks/useGame.types'

export const gameSort = (playerEntries: Player[]) =>
  playerEntries.sort(
    ({ section: sectionA }, { section: sectionB }) => sectionB - sectionA
  )
