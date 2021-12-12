import { useState } from 'react';
import { PlayerRow } from './PlayerRow';
import './App.css';
import { useGame } from './hooks';

const App = () => {
  const {
    players,
    addNewPlayer,
    changePlayerName,
    changeSection,
    changePlayerPoints,
    clearGame,
  } = useGame();
  const [newPlayerName, setNewPlayerName] = useState('');

  return (
    <div className='app-container'>
      <div className='header-container'>
        <h1>Killer Dart Counter</h1>
      </div>
      <div className='main-container'>
        {Object.entries(players)
          .sort(([_, { dartNumber: a }], [__, { dartNumber: b }]) => b - a)
          .map(([id, player]) => (
            <PlayerRow
              id={id}
              player={player}
              changePlayerName={changePlayerName}
              changePlayerDartNumber={changeSection}
              changePlayerPoints={changePlayerPoints}
            />
          ))}
      </div>
      <div className='control-container'>
        <div className='new-player-input-container'>
          <input
            name='newPlayer'
            type='text'
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
          />
          <div
            className='div-button'
            htmlFor='newPlayer'
            onClick={() => {
              if (newPlayerName !== '') {
                addNewPlayer(newPlayerName);
                setNewPlayerName('');
              }
            }}
          >
            Add player
          </div>
        </div>
        <div className='div-button' onClick={() => clearGame()}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default App;
