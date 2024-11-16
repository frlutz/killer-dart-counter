import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../../../components/ui/drawer'
import { Input } from '../../../components/ui/input'
import { PlayerChangeDrawerProps } from './PlayerChangeDrawer.types'

export const PlayerChangeDrawer: React.FC<PlayerChangeDrawerProps> = ({
  player,
  changeName,
  changeSection,
  removePlayer,
}) => {
  const [controlledPlayerName, setControlledPlayerName] = useState('')
  if (!player) return null

  const { name, section, id } = player
  // const [newPlayerName, setNewPlayerName] = useState('')

  return (
    <DrawerContent className='bg-primary text-primary-foreground'>
      <DrawerHeader>
        <DrawerTitle>Editing {name}</DrawerTitle>
        <DrawerDescription>
          {name} currently has section {section}, what would you like to change?
        </DrawerDescription>
      </DrawerHeader>
      <div className='flex flex-col space-y-12 items-center mb-8'>
        <div className='flex flex-col w-full items-center space-y-2'>
          <Input
            className='w-10/12'
            type='text'
            value={controlledPlayerName}
            onChange={e => setControlledPlayerName(e.target.value)}
          />
          <Button
            type='submit'
            className='w-10/12'
            variant='secondary'
            onClick={() => {
              if (controlledPlayerName !== '') {
                changeName({ id, newName: controlledPlayerName })
                setControlledPlayerName('')
              }
            }}
          >
            Change name
          </Button>
        </div>
        <Button
          className='flex w-3/4'
          variant='destructive'
          onClick={() => removePlayer(id)}
        >
          Erase entire game state
        </Button>
      </div>
    </DrawerContent>
  )
}
