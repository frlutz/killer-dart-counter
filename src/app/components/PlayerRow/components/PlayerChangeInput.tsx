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

const checkValidSection = (sectionValue: number | string) =>
  0 < +sectionValue && +sectionValue <= 20;

const PlayerChangeInput: React.FC<PlayerChangeInputProps> = ({
  inputType,
  value,
  setGameState,
  Icon,
  removePlayer,
}) => {
  const [controlledValue, setControlledValue] = useState(value || '');
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setControlledValue(value || '');
  }, [value]);

  useEffect(() => {
    if (
      checkValidSection(controlledValue) &&
      +controlledValue !== 1 &&
      +controlledValue !== 2
    ) {
      setGameState(controlledValue);
      setEdit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlledValue, inputType]);

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
              setControlledValue(value);
            }}
          >
            <CloseIcon fontSize='small' />
          </ControlButton>
          <ControlButton
            onClick={() => {
              if (removePlayer && controlledValue === '') removePlayer();
              if (
                controlledValue !== '' &&
                checkValidSection(controlledValue)
              ) {
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
