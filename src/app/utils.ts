import { Player } from './hooks/useGame.types'

export const gameSort = (gameEntries: Array<[string, Player]>) =>
  gameEntries.sort(
    ([, { section: sectionA }], [, { section: sectionB }]) =>
      sectionB - sectionA
  )
