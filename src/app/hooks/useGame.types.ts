export type Player = {
  id: string
  name: string
  section: number
  score: number
}

export type Game = {
  firstRound: boolean
  players: Player[]
}
