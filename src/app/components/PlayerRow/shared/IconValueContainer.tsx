import styled from 'styled-components';
import { IconValueContainerProps } from './IconValueContainer.types';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const IconValueContainer: React.FC<IconValueContainerProps> = ({
  children,
  Icon = null,
}) => (
  <StyledDiv>
    {Icon}
    {children}
  </StyledDiv>
);

export default IconValueContainer;
