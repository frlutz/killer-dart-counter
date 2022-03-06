import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ControlButton from '../../../shared/components/ControlButton';
import { PlayerChangeInputProps } from './PlayerChangeInput.types';
import IconValueContainer from '../shared/IconValueContainer';

const ChangeContainer = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const PlayerChangeInput: React.FC<PlayerChangeInputProps> = ({
  inputType,
  value,
  setGameState,
  Icon,
  removePlayer,
}) => {
  const [controlledValue, setControlledValue] = useState(
    value !== 0 ? value : ''
  );
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setControlledValue(value !== 0 ? value : '');
  }, [value]);

  if (edit) {
    return (
      <ChangeContainer>
        <StyledInput
          autoFocus
          type={inputType}
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
        />
        <ButtonContainer>
          <ControlButton
            onClick={() => {
              setEdit(false);
            }}
          >
            <CloseIcon fontSize='small' />
          </ControlButton>
          <ControlButton
            onClick={() => {
              if (removePlayer && controlledValue === '') removePlayer();
              if (controlledValue !== '') {
                setGameState(controlledValue);
                setControlledValue(controlledValue);
                setEdit(false);
              }
            }}
          >
            <CheckIcon fontSize='small' />
          </ControlButton>
        </ButtonContainer>
      </ChangeContainer>
    );
  }

  return (
    <ChangeContainer onClick={() => setEdit(true)}>
      <IconValueContainer Icon={Icon}>{value}</IconValueContainer>
    </ChangeContainer>
  );
};

export default PlayerChangeInput;
