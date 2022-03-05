import { useState } from 'react';
import PlayerRow from './components/PlayerRow';
import './App.css';
import { useGame } from './hooks';

const App = () => {
  const { game, addPlayer, changeName, changeSection, changeScore, clearGame } =
    useGame();
  const [newPlayerName, setNewPlayerName] = useState('');

  return (
    <div className='app-container'>
      <div className='header-container'>
        <div>
          <h1>Killer Dart Counter</h1>
        </div>
        <div className='column-titles'>
          <div>Name</div>
          <div>Section</div>
          <div>Score</div>
        </div>
      </div>
      <div className='main-container'>
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
      </div>
      <div className='control-container'>
        <div className='new-player-input-container'>
          <input
            type='text'
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
          />
          <div
            className='button control-button'
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
        <div className='button control-button' onClick={() => clearGame()}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default App;
