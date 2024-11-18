import { Settings } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Drawer } from '../components/ui/drawer'
import { ControlDrawer } from './components/ControlDrawer/ControlDrawer'
import { PlayerChangeDrawer } from './components/PlayerChangeDrawer/PlayerChangeDrawer'
import PlayerRow from './components/PlayerRow/PlayerRow'
import { useGame } from './hooks'
import { Player } from './hooks/useGame.types'
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
  const [isControlDrawerOpen, setIsControlDrawerOpen] = useState(false)
  const [isPlayerChangeDrawerOpen, setIsPlayerChangeDrawerOpen] =
    useState(false)
  const [currentPlayerAndId, setCurrentPlayer] = useState<Player | null>(null)

  const players = Object.values(game)

  return (
    <div className='flex flex-col h-screen w-screen bg-primary text-primary-foreground'>
      <Drawer open={isControlDrawerOpen} onOpenChange={setIsControlDrawerOpen}>
        <Drawer
          open={isPlayerChangeDrawerOpen}
          onOpenChange={setIsPlayerChangeDrawerOpen}
        >
          <div className='flex justify-between text-center align-center p-4 border-b-2 border-solid border-zinc-600'>
            <h1 className='text-4xl font-extrabold'>KDC v2</h1>
            <Button onClick={() => setIsControlDrawerOpen(true)}>
              <Settings className='size-10' />
            </Button>
          </div>

          <div className='flex flex-auto flex-col'>
            {gameSort(players).map(player => (
              <PlayerRow
                key={player.id}
                player={player}
                changeScore={changeScore(player.id)}
                setCurrentPlayer={setCurrentPlayer}
                setIsPlayerChangeDrawerOpen={setIsPlayerChangeDrawerOpen}
              />
            ))}
          </div>
          <PlayerChangeDrawer
            changeName={changeName}
            changeSection={changeSection}
            player={currentPlayerAndId}
            removePlayer={removePlayer}
            setIsPlayerChangeDrawerOpen={setIsPlayerChangeDrawerOpen}
          />
        </Drawer>
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
