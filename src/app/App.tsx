import { useState } from 'react';
import styled from 'styled-components';
import { ControlModal } from './components/ControlModal/ControlModal';
import PlayerRow from './components/PlayerRow/PlayerRow';
import { useGame } from './hooks';
import SettingsIcon from '@mui/icons-material/Settings';

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

const HeaderContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: space-evenly;
  text-align: center;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  margin: 0.5rem;
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
    removePlayer,
  } = useGame();
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Killer Dart Counter</h1>
        <StyledSettingsIcon onClick={() => setShowModal(!showModal)}>
          test
        </StyledSettingsIcon>
      </HeaderContainer>
      {showModal && (
        <ControlModal
          addPlayer={addPlayer}
          clearGame={clearGame}
          resetGame={resetGame}
          toggleModal={() => setShowModal(!showModal)}
        />
      )}
      <MainContainer>
        {Object.entries(game)
          .sort(([_, { section: a }], [__, { section: b }]) => b - a)
          .map(([id, player]) => (
            <PlayerRow
              key={`id-${player.name}`}
              id={id}
              player={player}
              changeName={changeName(id)}
              changeSection={changeSection(id)}
              changeScore={changeScore(id)}
              removePlayer={() => removePlayer(id)}
            />
          ))}
      </MainContainer>
    </AppContainer>
  );
};

export default App;
