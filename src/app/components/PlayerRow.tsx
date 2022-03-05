import { useState } from 'react';
import '../App.css';
import { PlayerRowProps } from './PlayerRow.types';

const PlayerRow: React.FC<PlayerRowProps> = ({
  id,
  player,
  changeName,
  changeSection,
  changeScore,
}) => {
  const [newName, setNewName] = useState(player.name || '');
  const [newSection, setNewSection] = useState(0);

  const [showChangeName, setShowChangeName] = useState(false);
  const [showChangeSection, setShowChangeSection] = useState(false);

  const { name, section, score } = player;

  return (
    <div
      key={id}
      className={`player-row 
      ${score === 5 ? 'killer-color' : ''} ${
        score > 5 || score < 0 ? 'killed-color' : ''
      }`}
    >
      <div
        className='button score-button'
        onClick={() => changeScore(score - 1)}
      >
        -
      </div>
      <div className='player-cell'>
        {!showChangeName ? (
          <div
            className='player-name-cell'
            onClick={() => setShowChangeName(true)}
          >
            {name}
          </div>
        ) : (
          <div>
            <input
              type='text'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div
              className='button control-button'
              onClick={() => {
                setNewName('');
                setShowChangeName(false);
              }}
            >
              ❌
            </div>
            <div
              className='button control-button'
              onClick={() => {
                changeName(newName);
                setNewName('');
                setShowChangeName(false);
              }}
            >
              ✅
            </div>
          </div>
        )}
      </div>
      <div className='player-cell'>
        {!showChangeSection ? (
          <div onClick={() => setShowChangeSection(true)}>{section}</div>
        ) : (
          <div>
            <input
              type='number'
              value={newSection || undefined}
              onChange={(e) => setNewSection(+e.target.value)}
            />
            <div
              className='button control-button'
              onClick={() => {
                setNewSection(0);
                setShowChangeSection(false);
              }}
            >
              ❌
            </div>
            <div
              className='button control-button'
              onClick={() => {
                changeSection(newSection);
                setNewSection(0);
                setShowChangeSection(false);
              }}
            >
              ✅
            </div>
          </div>
        )}
      </div>
      <div className='player-cell score'>{score}</div>
      <div
        className='button score-button'
        onClick={() => changeScore(score + 1)}
      >
        +
      </div>
    </div>
  );
};

export default PlayerRow;
