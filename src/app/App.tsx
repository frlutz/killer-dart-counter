import { Settings } from 'lucide-react'
import { Drawer, DrawerTrigger } from '../components/ui/drawer'
import { ControlDrawer } from './components/ControlDrawer/ControlDrawer'
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
      <Drawer>
        <div className='flex justify-between text-center align-center p-4 border-b-2 border-solid border-zinc-600'>
          <h1 className='text-4xl font-extrabold'>KDC v2</h1>
          <DrawerTrigger asChild>
            <Settings className='size-10' />
          </DrawerTrigger>
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
        <ControlDrawer
          addPlayer={addPlayer}
          clearGame={clearGame}
          resetGame={resetGame}
        />
      </Drawer>
    </div>
  )
}

export default App
