import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  padding-top: 24px;
`;

export const TextHeader = styled.Text`
  color: #7d40e7;
  padding-left: 10px;
`;

export const TimeLine = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
  padding-left: 43px;
`;
export const TimeLineStatus = styled.View`
  flex-direction: row;
  align-items: center;
  width: 200px;
  padding-top: 10px;
  padding-left: 30px;
`;

export const TimeLineText = styled.Text`
  color: #999;
  font-size: 8px;
  margin-right:40px;
  width: 70px;
  align-items: center;
`;

export const Circle = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 50px;
  border-width: 1px;
  background-color: ${props => props.background || "#fff"};
  border-color: #7D40E7;
`;

export const Line = styled.View`
  width: 100px;
  height: 1px;
  background-color: #7D40E7;
`;





export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding-top: 24px;
`;

export const FooterText = styled.Text`
  color: #999;
  font-size: 8px;
  font-weight: bold;
`;

export const FooterData = styled.Text`
  color: #444;
  font-size: 12px;
  font-weight: bold;
`;

export const FooterDetail = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 12px;
  padding-right: 16px;
`;
