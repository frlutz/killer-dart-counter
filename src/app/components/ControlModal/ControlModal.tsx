import { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

import ControlButton from '../../shared/components/ControlButton';
import { ControlModalProps } from './ControlModal.types';

const ModalContainer = styled.div`
  position: absolute;
  left: 8vw;
  right: 8vw;
  top: 10vh;
  bottom: 10vh;
  background-color: #eeeeee;
  padding: 50px;
  border-radius: 50px;
  filter: drop-shadow(5px 5px 10px #000000dd);
  & > * {
    filter: drop-shadow(1px 3px 5px #00000055);
  }
  color: #000000aa;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const NewPlayerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
`;

const NameInput = styled.input`
  height: 3rem;
`;

export const ControlModal: React.FC<ControlModalProps> = ({
  addPlayer,
  clearGame,
  resetGame,
  toggleModal,
}) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  return (
    <ModalContainer>
      <IconContainer>
        <CloseIcon onClick={toggleModal} />
      </IconContainer>
      <ModalContent>
        <NewPlayerInputContainer>
          <NameInput
            type='text'
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
          />
          <ControlButton
            onClick={() => {
              if (newPlayerName !== '') {
                addPlayer(newPlayerName);
                setNewPlayerName('');
              }
            }}
            verticalPadding={1}
          >
            Add
          </ControlButton>
        </NewPlayerInputContainer>
        <ControlButton onClick={() => resetGame()} verticalPadding={2}>
          New game
        </ControlButton>
        <ControlButton onClick={() => clearGame()} verticalPadding={0.8}>
          Erase game state
        </ControlButton>
      </ModalContent>
    </ModalContainer>
  );
};
