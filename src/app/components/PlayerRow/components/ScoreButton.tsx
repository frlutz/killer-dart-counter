import styled from 'styled-components';
import { ScoreButtonProps } from './ScoreButton.types';

const ScoreButtonContainer = styled.div`
  font-size: 100%;
  height: 100%;
  width: 14vw;
  background-color: #00000077;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScoreButton: React.FC<ScoreButtonProps> = ({
  score,
  operation,
  changeScore,
  flashCallback,
}) => (
  <ScoreButtonContainer
    onClick={() => {
      operation === 'increment'
        ? changeScore(score + 1)
        : changeScore(score - 1);
      flashCallback();
    }}
  >
    {operation === 'increment' ? '+' : '-'}
  </ScoreButtonContainer>
);

export default ScoreButton;
