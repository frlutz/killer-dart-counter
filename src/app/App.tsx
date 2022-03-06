import { useState } from 'react';
import styled from 'styled-components';
import PlayerRow from './components/PlayerRow/PlayerRow';
import { useGame } from './hooks';
import ControlButton from './shared/components/ControlButton';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const MainContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.1rem 0.2rem;
`;

const HeaderContainer = styled.div`
  flex: 0 1 auto;
  text-align: center;
`;

const NewPlayerInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const App = () => {
  const {
    game,
    addPlayer,
    changeName,
    changeSection,
    changeScore,
    clearGame,
    resetGame,
  } = useGame();
  const [newPlayerName, setNewPlayerName] = useState('');

  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Killer Dart Counter</h1>
      </HeaderContainer>
      <MainContainer>
        {Object.entries(game)
          .sort(([_, { section: a }], [__, { section: b }]) => b - a)
          .map(([id, player]) => (
            <PlayerRow
              key={id}
              id={id}
              player={player}
              changeName={changeName(id)}
              changeSection={changeSection(id)}
              changeScore={changeScore(id)}
            />
          ))}
      </MainContainer>
      <ControlContainer>
        <NewPlayerInputContainer>
          <input
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
          >
            Add
          </ControlButton>
          <ControlButton onClick={() => resetGame()}>Reset</ControlButton>
        </NewPlayerInputContainer>
        <ControlButton onClick={() => clearGame()}>Clear</ControlButton>
      </ControlContainer>
    </AppContainer>
  );
};

export default App;
