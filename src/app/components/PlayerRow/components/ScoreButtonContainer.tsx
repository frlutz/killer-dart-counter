import { Minus, Plus } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { ScoreButtonContainerProps } from './ScoreButtonContainer.types'

const ScoreButtonContainer: React.FC<ScoreButtonContainerProps> = ({
  score,
  operation,
  changeScore,
  flashCallback,
}) => (
  <div className='h-full w-3/12 flex justify-center items-center mx-1 '>
    <Button
      className='h-5/6 w-full text-4xl text-zinc-100 bg-zinc-600/20 hover:bg-zinc-600/20'
      size='icon'
      onClick={() => {
        if (operation === 'increment') {
          changeScore(score + 1)
        } else {
          changeScore(score - 1)
        }
        flashCallback()
      }}
    >
      {operation === 'increment' ? <Plus /> : <Minus />}
    </Button>
  </div>
)

export default ScoreButtonContainer
