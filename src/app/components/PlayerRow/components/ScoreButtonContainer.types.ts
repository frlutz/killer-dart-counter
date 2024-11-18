export type ScoreButtonContainerProps = {
  score: number
  operation: 'increment' | 'decrement'
  changeScore: ({ newScore }: { newScore: number }) => void
  disabled: boolean
  flashCallback: () => void
}
