import styled from 'styled-components';
import { IconValueContainerProps } from './IconValueContainer.types';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const PaddingDiv = styled.div`
  padding: 0 8px;
`;

const IconValueContainer: React.FC<IconValueContainerProps> = ({
  children,
  Icon = null,
}) => (
  <StyledDiv>
    {Icon && <PaddingDiv>{Icon}</PaddingDiv>}
    <PaddingDiv>{children}</PaddingDiv>
  </StyledDiv>
);

export default IconValueContainer;
