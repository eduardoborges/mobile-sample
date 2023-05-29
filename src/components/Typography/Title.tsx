import Animated from 'react-native-reanimated';
import Styled from 'styled-components/native';

export const H1 = Styled(Animated.Text)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 32px;
  font-weight: bold;
  color: #000;
`;
