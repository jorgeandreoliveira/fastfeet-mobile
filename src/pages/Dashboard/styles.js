import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 22px;
`;

export const FilterHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 34px;
  align-items: center;
  justify-content: space-between;
`;

export const Filter = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export const DeliveryTitle = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 22px;
  margin-left: 20px;
`;

export const FilterTitle = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 12px;
  padding-right: 15px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
