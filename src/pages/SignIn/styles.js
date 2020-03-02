import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 245px 30px 0px;
  background-color: #7d40e7;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex-direction: row;
  height: 45px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #82bf18;
  border-radius: 4px;
  height: 45px;
  color: #ffffff;
`;

export const SubmitButtonText = styled.Text`
  color: #ffffff;
`;
