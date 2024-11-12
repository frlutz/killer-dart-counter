import { useState } from 'react'

import { Button } from '../../../components/ui/button'
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../../../components/ui/drawer'
import { Input } from '../../../components/ui/input'
import { ControlDrawerProps } from './ControlDrawer.types'

export const ControlDrawer: React.FC<ControlDrawerProps> = ({
  addPlayer,
  clearGame,
  resetGame,
}) => {
  const [newPlayerName, setNewPlayerName] = useState('')

  return (
    <DrawerContent className='bg-primary text-primary-foreground'>
      <DrawerHeader>
        <DrawerTitle>Edit game settings</DrawerTitle>
        <DrawerDescription>
          Add players, start a new round or erase the entire game state
        </DrawerDescription>
      </DrawerHeader>
      <div className='flex flex-col space-y-12 items-center mb-8'>
        <div className='flex flex-col w-full items-center space-y-2'>
          <Input
            className='w-10/12'
            type='text'
            value={newPlayerName}
            onChange={e => setNewPlayerName(e.target.value)}
          />
          <Button
            type='submit'
            className='w-10/12'
            variant='secondary'
            onClick={() => {
              if (newPlayerName !== '') {
                addPlayer(newPlayerName)
                setNewPlayerName('')
              }
            }}
          >
            Add player
          </Button>
        </div>
        <Button
          className='flex w-3/4'
          variant='secondary'
          onClick={() => {
            resetGame()
          }}
        >
          New round
        </Button>
        {/* TODO: Add confirm click */}
        <Button
          className='flex w-3/4'
          variant='destructive'
          onClick={() => clearGame()}
        >
          Erase entire game state
        </Button>
      </div>
    </DrawerContent>
  )
}
