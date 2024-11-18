import classnames from 'classnames'
import { Bomb, ChartPie, Droplets, Skull, Tally5 } from 'lucide-react'
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
  setCurrentPlayer,
  setIsPlayerChangeDrawerOpen,
}) => {
  const { name, section, score, id } = player

  const exceeded = score > 5
  const dead = score < 0
  const isDead = dead || exceeded
  const isKiller = score === 5

  const currentVariant = (() => {
    if (isDead) return 'dead'
    if (isKiller) return 'killer'
    return 'base'
  })()

  const playerRowVariants = {
    base: 'flex-[5_5_0%] odd:bg-zinc-900 even:bg-zinc-800',
    dead: 'flex-[3_3_0%] odd:bg-stone-950 even:bg-stone-950 border-solid [&:not(:last-child)]:border-b-2 border-zinc-500',
    killer: 'flex-[5_5_0%] odd:bg-lime-600 even:bg-lime-500',
  }

  return (
    <div
      key={id}
      className={classnames(
        `flex justify-between text-center items-center transition duration-200 ${playerRowVariants[currentVariant]}`
      )}
    >
      <ScoreButtonContainer
        score={score}
        operation='decrement'
        disabled={dead}
        changeScore={changeScore}
        // TODO: Re-add flash callback with Tailwind
        flashCallback={() => {}}
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
        // TODO: Re-add flash callback with Tailwind
        flashCallback={() => {}}
      />
    </div>
  )
}

export default PlayerRow
