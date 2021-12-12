import { useState } from 'react';
import './App.css';

export const PlayerRow = ({
  id,
  player,
  changePlayerName,
  changePlayerDartNumber,
  changePlayerPoints,
}) => {
  const [newName, setNewName] = useState('');
  const [newPoints, setNewDartNumber] = useState();

  const [showChangeName, setShowChangeName] = useState(false);
  const [showChangeDartNumber, setShowChangeDartNumber] = useState(false);

  const { name, dartNumber, points } = player;

  return (
    <div
      key={id}
      className={`player-row 
      ${points === 5 ? 'killer-color' : ''} ${
        points > 5 || points < 0 ? 'killed-color' : ''
      }`}
    >
      <div className='player-cell'>
        {!showChangeName ? (
          <div onClick={() => setShowChangeName(true)}>{name}</div>
        ) : (
          <div>
            <input
              type='text'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div
              className='div-button'
              onClick={() => {
                setNewName('');
                setShowChangeName(false);
              }}
            >
              ❌
            </div>
            <div
              className='div-button'
              onClick={() => {
                changePlayerName(id, newName);
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
        {!showChangeDartNumber ? (
          <div onClick={() => setShowChangeDartNumber(true)}>{dartNumber}</div>
        ) : (
          <div>
            <input
              type='text'
              value={newPoints}
              onChange={(e) => setNewDartNumber(e.target.value)}
            />
            <div
              className='div-button'
              onClick={() => {
                setNewDartNumber('');
                setShowChangeDartNumber(false);
              }}
            >
              ❌
            </div>
            <div
              className='div-button'
              onClick={() => {
                changePlayerDartNumber(id, newPoints);
                setNewDartNumber('');
                setShowChangeDartNumber(false);
              }}
            >
              ✅
            </div>
          </div>
        )}
      </div>
      <div className='player-cell points'>
        <div
          className='div-button symbol'
          onClick={() => changePlayerPoints(id, points - 1)}
        >
          -
        </div>
        {points}
        <div
          className='div-button symbol'
          onClick={() => changePlayerPoints(id, points + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
};
