import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`

`;

export const Content = styled.View`
 width: 335px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 70px;
  left: 14px;
  border-radius: 4px;
  border-color: #0000001A;
`;

export const TextInput = styled.TextInput`
  height: 300px;
  font-size: 16px;
  color: #999;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #7d40e7;
  border-radius: 4px;
  height: 45px;
  color: #ffffff;
`;

export const SubmitButtonText = styled.Text`
  color: #ffffff;
`;
