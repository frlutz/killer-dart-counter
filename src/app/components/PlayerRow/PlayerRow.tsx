import styled from 'styled-components';
import PlayerChangeInput from './components/PlayerChangeInput';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ScoreButton from './components/ScoreButton';
import { PlayerRowProps } from './PlayerRow.types';
import IconValueContainer from './shared/IconValueContainer';

const PlayerRowContainer = styled.div<{ $score: number }>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  background: #7f7668;
  align-items: center;

  ${({ $score }) => {
    if ($score === 5)
      return `
      background: #FF4343;
      :nth-child(odd) {
        background: #FF4343cc;
    }`;
    if ($score > 5 || $score < 0)
      return `
      background: #2F2D2D;
      :nth-child(odd) {
        background: #2F2D2Dcc;
    }`;
    return `:nth-child(odd) {
            background: #7f7668bb;
        }`;
  }}
`;

const PlayerRowMainContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PlayerData = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerDataContainer = styled.div`
  display: flex;
  flex: 1;
  justifyContent
`;

const PlayerRow: React.FC<PlayerRowProps> = ({
  id,
  player,
  changeName,
  changeSection,
  changeScore,
  removePlayer,
}) => {
  const { name, section, score } = player;

  return (
    <PlayerRowContainer key={id} $score={score}>
      <ScoreButton
        score={score}
        operation='decrement'
        changeScore={changeScore}
      />
      <PlayerRowMainContainer>
        <PlayerData>
          <PlayerChangeInput
            inputType='text'
            value={name}
            setGameState={changeName as (newGameState: string | number) => void}
            removePlayer={removePlayer}
          />
        </PlayerData>
        <PlayerDataContainer>
          <PlayerData>
            <PlayerChangeInput
              inputType='number'
              value={section}
              setGameState={
                changeSection as (newGameState: string | number) => void
              }
              Icon={<DonutSmallIcon fontSize='inherit' />}
            />
          </PlayerData>
          <PlayerData>
            <ScoreContainer>
              <IconValueContainer Icon={<EmojiEventsIcon fontSize='inherit' />}>
                {score}
              </IconValueContainer>
            </ScoreContainer>
          </PlayerData>
        </PlayerDataContainer>
      </PlayerRowMainContainer>
      <ScoreButton
        score={score}
        operation='increment'
        changeScore={changeScore}
      />
    </PlayerRowContainer>
  );
};

export default PlayerRow;
