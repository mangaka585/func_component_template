import styled from 'styled-components';

import colors from '../../constants/colors';

export const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;

  color: ${colors.black100};

  border: 1px solid ${colors.black10};
  border-radius: 4px;

  &::placeholder {
    color: ${colors.black30};
    font-family: Ubuntu;
  }
`;
