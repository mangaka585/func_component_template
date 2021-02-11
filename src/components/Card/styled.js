import styled from 'styled-components';

import colors from '../../constants/colors';

export const CardWrapper = styled.div`
  margin: 8px 0;
  padding: 8px 16px;

  border: 1px solid ${colors.black10};
  border-radius: 4px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const Subtitle = styled(Title)`
  font-weight: 500;
  font-size: 12px;

  color: ${colors.black50};

  margin-top: 4px;
`;

export const AddressInfo = styled.span`
  font-weight: 500;
  font-size: 12px;

  color: ${colors.black30};

  margin-top: 4px;
`;
