import { useLocalStorageState } from './utils';
import { useState } from 'react';
import { PlayerRow } from './PlayerRow';
import './App.css';

const App = () => {
  const [players, setPlayers] = useLocalStorageState('players', {});

  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = (playerName) => {
    setPlayers({
      ...players,
      [Object.keys(players).length + 1]: {
        name: playerName,
        dartNumber: 0,
        points: 0,
      },
    });
  };

  const changePlayerName = (id, newName) => {
    setPlayers({ ...players, [id]: { ...players[id], name: newName } });
  };
  const changePlayerDartNumber = (id, newDartNumber) => {
    setPlayers({
      ...players,
      [id]: { ...players[id], dartNumber: newDartNumber },
    });
  };
  const changePlayerPoints = (id, newPoints) => {
    setPlayers({ ...players, [id]: { ...players[id], points: newPoints } });
  };

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
              changePlayerDartNumber={changePlayerDartNumber}
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
                addPlayer(newPlayerName);
                setNewPlayerName('');
              }
            }}
          >
            Add player
          </div>
        </div>
        <div
          className='div-button'
          onClick={() => {
            window.localStorage.removeItem('players');
            setPlayers({});
          }}
        >
          Clear
        </div>
      </div>
    </div>
  );
};

export default App;
