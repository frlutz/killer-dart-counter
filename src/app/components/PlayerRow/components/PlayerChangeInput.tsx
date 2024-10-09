import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ControlButton from '../../../shared/components/ControlButton'
import IconValueContainer from '../shared/IconValueContainer'
import { PlayerChangeInputProps } from './PlayerChangeInput.types'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const StyledInput = styled.input`
  width: 100%;
`

const checkValidSection = (sectionValue: number | string) =>
  0 < +sectionValue && +sectionValue <= 20

const PlayerChangeInput: React.FC<PlayerChangeInputProps> = ({
  inputType,
  value,
  setGameState,
  Icon,
  removePlayer,
}) => {
  const [controlledValue, setControlledValue] = useState(value || '')
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    setControlledValue(value || '')
  }, [value])

  useEffect(() => {
    if (
      inputType === 'number' &&
      checkValidSection(controlledValue) &&
      +controlledValue !== 1 &&
      +controlledValue !== 2
    ) {
      setGameState(controlledValue)
      setEdit(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlledValue, inputType])

  if (edit) {
    return (
      <div
        className='flex w-full p-2 flex-col justify-center'
        onClick={() => setEdit(true)}
      >
        <StyledInput
          autoFocus
          type={inputType}
          value={controlledValue}
          onChange={e => setControlledValue(e.target.value)}
        />
        <ButtonContainer>
          <ControlButton
            onClick={() => {
              setEdit(false)
              setControlledValue(value)
            }}
          >
            <CloseIcon fontSize='small' />
          </ControlButton>
          <ControlButton
            onClick={() => {
              if (removePlayer && controlledValue === '') removePlayer()
              if (
                controlledValue !== '' &&
                ((inputType === 'number' &&
                  checkValidSection(controlledValue)) ||
                  inputType === 'text')
              ) {
                setGameState(controlledValue)
                setControlledValue(controlledValue)
                setEdit(false)
              }
            }}
          >
            <CheckIcon fontSize='small' />
          </ControlButton>
        </ButtonContainer>
      </div>
    )
  }

  return (
    <div
      className='flex w-full flex-col justify-center text-center'
      onClick={() => setEdit(true)}
    >
      <IconValueContainer Icon={Icon}>{value}</IconValueContainer>
    </div>
  )
}

export default PlayerChangeInput
