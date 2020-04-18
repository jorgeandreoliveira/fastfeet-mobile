import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`

`;

export const Content = styled.View`
  width: 335px;
  height: 400px;
  position: absolute;
  top: 180px;
  left: 14px;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #7d40e7;
  border-radius: 4px;
  height: 45px;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const SubmitButtonText = styled.Text`
  color: #ffffff;
`;
