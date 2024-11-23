import { useEffect, useState } from 'react'
import { Button } from '../../../components/ui/button'
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../../../components/ui/drawer'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { ConfirmButton } from '../ConfirmButton/ConfirmButton'
import { PlayerChangeDrawerProps } from './PlayerChangeDrawer.types'

const checkValidSection = (sectionValue: number | string) =>
  0 < +sectionValue && +sectionValue <= 20 && sectionValue !== ''

export const PlayerChangeDrawer: React.FC<PlayerChangeDrawerProps> = ({
  player,
  changeName,
  changeSection,
  removePlayer,
  setIsPlayerChangeDrawerOpen,
}) => {
  const [controlledPlayerName, setControlledPlayerName] = useState('')
  const [controlledSection, setControlledSection] = useState<number | ''>('')

  useEffect(() => {
    setControlledPlayerName('')
  }, [player])
  if (!player) return null

  const { name, section, id } = player

  return (
    <DrawerContent className='bg-primary text-primary-foreground'>
      <DrawerHeader>
        <DrawerTitle>Editing {name}</DrawerTitle>
        <DrawerDescription>
          {name} currently has section {section}, what would you like to change?
        </DrawerDescription>
      </DrawerHeader>
      <div className='flex flex-col space-y-6 items-center mb-8'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label>Name</Label>
          <Input
            className='h-16 text-xl'
            type='text'
            placeholder={player.name}
            value={controlledPlayerName}
            onChange={e => setControlledPlayerName(e.target.value)}
          />
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label>Section</Label>
          <Input
            className='h-16 text-xl'
            placeholder={`${player.section}`}
            type='number'
            value={controlledSection}
            onChange={e => setControlledSection(+e.target.value)}
          />
        </div>
        <Button
          disabled={!controlledPlayerName && !controlledSection}
          type='submit'
          className='w-10/12'
          variant='secondary'
          onClick={() => {
            if (checkValidSection(controlledSection)) {
              if (controlledSection !== '')
                changeSection({ id, newSection: controlledSection })
              changeName({ id, newName: controlledPlayerName })
              setControlledSection('')
              setControlledPlayerName('')
              setIsPlayerChangeDrawerOpen(false)
            }
          }}
        >
          Save
        </Button>
        <ConfirmButton
          initialText='Remove player'
          confirmText={`Are you sure you want to remove ${player.name}?`}
          className='flex w-3/4'
          variant='destructive'
          onClick={() => {
            removePlayer(id)
            setIsPlayerChangeDrawerOpen(false)
          }}
        />
      </div>
    </DrawerContent>
  )
}
