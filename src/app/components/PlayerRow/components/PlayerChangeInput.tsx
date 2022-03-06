import { useState } from 'react';
import styled from 'styled-components';
import ControlButton from '../../../shared/components/ControlButton';
import { PlayerChangeInputProps } from './PlayerChangeInput.types';

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
}) => {
  const [controlledValue, setControlledValue] = useState(value);
  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <ChangeContainer>
        <StyledInput
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
            ❌
          </ControlButton>
          <ControlButton
            onClick={() => {
              setGameState(controlledValue);
              setEdit(false);
            }}
          >
            ✅
          </ControlButton>
        </ButtonContainer>
      </ChangeContainer>
    );
  }

  return (
    <ChangeContainer onClick={() => setEdit(true)}>{value}</ChangeContainer>
  );
};

export default PlayerChangeInput;
