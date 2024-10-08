import { useState } from 'react'

import { DialogTitle } from '@radix-ui/react-dialog'
import { Button } from '../../../components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '../../../components/ui/dialog'
import { Input } from '../../../components/ui/input'
import { ControlDialogProps } from './ControlDialog.types'

export const ControlDialog: React.FC<ControlDialogProps> = ({
  addPlayer,
  clearGame,
  resetGame,
}) => {
  const [newPlayerName, setNewPlayerName] = useState('')

  return (
    <DialogContent className='bg-primary text-primary-foreground rounded-xl'>
      <DialogHeader>
        <DialogTitle>Edit game settings</DialogTitle>
        <DialogDescription>
          Add players, start a new round or erase the entire game state
        </DialogDescription>
      </DialogHeader>
      <div className='flex flex-col space-y-12 items-center'>
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
        <Button
          className='flex w-3/4'
          variant='destructive'
          onClick={() => clearGame()}
        >
          Erase entire game state
        </Button>
      </div>
    </DialogContent>
  )
}
