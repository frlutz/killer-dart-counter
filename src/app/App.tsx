import { Settings } from 'lucide-react'
import { Dialog, DialogTrigger } from '../components/ui/dialog'
import { ControlDialog } from './components/ControlDialog/ControlDialog'
import PlayerRow from './components/PlayerRow/PlayerRow'
import { useGame } from './hooks'
import { gameSort } from './utils'

const App = () => {
  const {
    game,
    addPlayer,
    changeName,
    changeSection,
    changeScore,
    clearGame,
    resetGame,
    removePlayer,
  } = useGame()

  return (
    <div className='flex flex-col h-screen w-screen bg-primary text-primary-foreground'>
      <Dialog>
        <div className='flex justify-between text-center align-center p-4 border-b-2 border-solid border-zinc-600'>
          <h1 className='text-4xl font-extrabold'>KDC v2</h1>
          <DialogTrigger asChild>
            <Settings className='size-10' />
          </DialogTrigger>
          <ControlDialog
            addPlayer={addPlayer}
            clearGame={clearGame}
            resetGame={resetGame}
          />
        </div>

        <div className='flex flex-auto flex-col'>
          {gameSort(Object.entries(game)).map(([id, player]) => (
            <PlayerRow
              key={`id-${player.name}`}
              id={id}
              player={player}
              changeName={changeName(id)}
              changeSection={changeSection(id)}
              changeScore={changeScore(id)}
              removePlayer={() => removePlayer(id)}
            />
          ))}
        </div>
      </Dialog>
    </div>
  )
}

export default App
