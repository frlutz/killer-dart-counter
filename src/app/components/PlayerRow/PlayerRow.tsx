import styled from 'styled-components';
import PlayerChangeInput from './components/PlayerChangeInput';
import ScoreButton from './components/ScoreButton';
import { PlayerRowProps } from './PlayerRow.types';

const PlayerRowContainer = styled.div<{ $score: number }>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  background: rgb(151, 138, 118);
  align-items: center;

  ${({ $score }) => {
    if ($score === 5) return `background: rgb(255, 67, 67);`;
    if ($score > 5 || $score < 0) return `background: rgb(47, 45, 45)`;
    return `:nth-child(odd) {
            background: rgb(110, 100, 86);
        }`;
  }}
`;

const PlayerCell = styled.div`
  max-width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PlayerRow: React.FC<PlayerRowProps> = ({
  id,
  player,
  changeName,
  changeSection,
  changeScore,
}) => {
  const { name, section, score } = player;

  return (
    <PlayerRowContainer key={id} $score={score}>
      <ScoreButton
        score={score}
        operation='decrement'
        changeScore={changeScore}
      />
      <PlayerCell>
        <PlayerChangeInput
          inputType='text'
          value={name}
          setGameState={changeName as (newGameState: string | number) => void}
        />
      </PlayerCell>
      <PlayerCell>
        <PlayerChangeInput
          inputType='number'
          value={section}
          setGameState={
            changeSection as (newGameState: string | number) => void
          }
        />
      </PlayerCell>
      <PlayerCell>{score}</PlayerCell>
      <ScoreButton
        score={score}
        operation='increment'
        changeScore={changeScore}
      />
    </PlayerRowContainer>
  );
};

export default PlayerRow;
