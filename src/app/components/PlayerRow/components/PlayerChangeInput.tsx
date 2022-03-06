import { useState } from 'react';
import styled from 'styled-components';
import ControlButton from '../../../shared/components/ControlButton';
import { PlayerChangeInputProps } from './PlayerChangeInput.types';

const ChangeContainer = styled.div`
  width: 100%;
  padding: 2px;
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
      </ChangeContainer>
    );
  }

  return (
    <ChangeContainer onClick={() => setEdit(true)}>{value}</ChangeContainer>
  );
};

export default PlayerChangeInput;
