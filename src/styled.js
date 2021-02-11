import styled from 'styled-components';

import colors from './constants/colors';

export const Wrapper = styled.div`
  width: 600px;
  padding: 48px;

  color: ${colors.black100};

  font-family: Ubuntu;
  font-size: 14px;
`;

export const Controls = styled.div`
  display: flex;
  width: 100%;

  & :first-child {
    margin-right: 16px;
  }
`;

export const Total = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 16px 0;
`;
