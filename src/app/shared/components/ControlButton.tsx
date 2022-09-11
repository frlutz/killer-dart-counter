import styled from 'styled-components';
import { ControlButtonProps } from './ControlButton.types';

const ControlButtonContainer = styled.div<{ $verticalPadding?: number }>`
  color: #505050;
  font-size: 0.6rem;
  ${({ $verticalPadding }) => `padding: ${$verticalPadding ?? 0.1}rem 0.5rem;`}
  margin: 0.2rem;
  border-radius: 10px;
  border: 4px solid #fdfdfd;
  background: #fdfdfd;

  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

const ControlButton: React.FC<ControlButtonProps> = ({
  children,
  onClick,
  verticalPadding,
}) => (
  <ControlButtonContainer onClick={onClick} $verticalPadding={verticalPadding}>
    {children}
  </ControlButtonContainer>
);

export default ControlButton;
