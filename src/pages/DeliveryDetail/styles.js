import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`

`;

export const Delivery = styled.View`
  height: 365px;
  width: 320px;
  background-color: #fff;
  position: absolute;
  top: 70px;
  left: 20px;
  align-content: center;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
  padding-top: 15px;
  border-radius: 4px;
`;

export const TextHeader = styled.Text`
  font-weight: bold;
  color: #7d40e7;
  padding-left: 5px;

`;

export const DeliveryInfo = styled.View`
  padding-top: 5px;
  padding-left: 14px;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const DataInfo = styled.Text`
  font-size: 14px;
  color: #666;
  padding-bottom: 15px;
`;

export const StatusHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
  padding-top: 15px;
  border-radius: 4px;
`;

export const StatusInfo = styled.View`
  padding-top: 5px;
  padding-left: 14px;
`;

export const StatusInfoDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 14px;
  padding-right: 20px;
`;

export const DeliveryStatus = styled.View`
  padding-top: 5px;
  padding-left: 14px;
`;

export const Buttons = styled.View`
    flex-direction: row;
    height: 83px;
    position: absolute;
    align-items: center;
    top: 435px;
    left: 20px;
    border-radius: 4px;
    background-color: #fff;
`;

export const ViewButtons = styled.View`
    align-items: center;
    width: 78.5px;
`;

export const TextButtons = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const IconButtons = styled(TouchableOpacity)`
  align-items: center;
`;

export const Rect = styled.View`
  height: 83px;
  border: 1px;
  border-color: #0000001A;
`;
