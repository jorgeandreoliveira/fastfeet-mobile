import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 50px;
`;

export const Profile = styled.View`
  padding-top: 20px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Data = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  padding-bottom: 15px;
`;

export const Logout = styled.TouchableOpacity`
  height: 40px;
  width: 305px;
  background-color: #E74040;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
