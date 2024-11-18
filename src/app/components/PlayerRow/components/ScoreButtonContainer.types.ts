export type ScoreButtonContainerProps = {
  score: number
  operation: 'increment' | 'decrement'
  changeScore: (newScore: number) => void
  disabled: boolean
  flashCallback: () => void
}
