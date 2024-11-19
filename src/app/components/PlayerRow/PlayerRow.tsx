import { Bomb, ChartPie, Droplets, Skull, Tally5 } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../../lib/utils'
import ScoreButtonContainer from './components/ScoreButtonContainer'
import { PlayerRowProps } from './PlayerRow.types'
import IconValueContainer from './shared/IconValueContainer'

const customIcon = ({
  isKiller,
  exceeded,
  dead,
}: {
  isKiller: boolean
  exceeded: boolean
  dead: boolean
}): React.ReactNode => {
  if (isKiller) return <Droplets size='60' />
  if (exceeded) return <Bomb size='60' />
  if (dead) return <Skull size='60' />
  return null
}

const PlayerRow: React.FC<PlayerRowProps> = ({
  player,
  changeScore,
  firstRound,
  setCurrentPlayer,
  setIsPlayerChangeDrawerOpen,
}) => {
  const [flash, setFlash] = useState(false)

  const triggerFlash = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 100)
  }
  const { name, section, score, id } = player

  const exceeded = score > 5
  const dead = score < 0 || (score === 0 && firstRound === false)
  const isDead = dead || exceeded
  const isKiller = score === 5

  const playerRowVariants = {
    base: 'flex flex-[5_5_0%] odd:bg-zinc-900 even:bg-zinc-800 justify-between text-center items-center transition duration-300',
    dead: 'flex-[3_3_0%] odd:bg-stone-950 even:bg-stone-950 border-solid [&:not(:last-child)]:border-b-2 border-zinc-500',
    killer: 'odd:bg-lime-600 even:bg-lime-500',
    flash: 'odd:bg-lime-50/60 even:bg-lime-50/60',
  }

  return (
    <div
      key={id}
      className={cn(
        playerRowVariants.base,
        isDead && playerRowVariants.dead,
        isKiller && playerRowVariants.killer,
        flash && playerRowVariants.flash
      )}
    >
      <ScoreButtonContainer
        score={score}
        operation='decrement'
        disabled={dead}
        changeScore={changeScore}
        flashCallback={triggerFlash}
      />
      <div className='h-full w-full flex flex-col justify-evenly'>
        <div className={`flex flex-1 justify-center text-center items-center`}>
          <div
            className='flex w-full flex-col justify-center text-center'
            onClick={() => {
              setCurrentPlayer(player)
              setIsPlayerChangeDrawerOpen(true)
            }}
          >
            <IconValueContainer>{name}</IconValueContainer>
          </div>
        </div>
        <div className='flex flex-1 justify-center text-center'>
          <div className='flex flex-1 justify-center text-center'>
            <div className='flex w-full flex-col justify-center text-center'>
              <IconValueContainer Icon={<ChartPie size='40' />}>
                {section}
              </IconValueContainer>
            </div>
          </div>
          <div className='flex flex-1 items-center justify-center text-center'>
            {exceeded || dead || isKiller ? (
              customIcon({ isKiller, exceeded, dead })
            ) : (
              <IconValueContainer Icon={<Tally5 size='40' />}>
                {score}
              </IconValueContainer>
            )}
          </div>
        </div>
      </div>
      <ScoreButtonContainer
        score={score}
        operation='increment'
        disabled={exceeded}
        changeScore={changeScore}
        flashCallback={triggerFlash}
      />
    </div>
  )
}

export default PlayerRow
