import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, TextHeader, TimeLine, TimeLineStatus, TimeLineText,
  Footer, FooterText, FooterData, FooterDetail, Circle, Line } from './styles';

export default function Delivery({data, navigation}) {

  let createdAt;

  if (data.created_at) {
    createdAt = <FooterData>{format(parseISO(data.created_at), "dd'/'MM'/'yyyy")}</FooterData>
  }
  else {
    createdAt = <FooterData>{data.created_at}</FooterData>
  }

  let aguardandoRetirada = "#fff";
  let retirada = "#fff";
  let entregue = "#fff";

  if (data.end_date)
  {
    aguardandoRetirada= "#7d40e7";
    retirada = "#7d40e7";
    entregue = "#7d40e7";
  }

  if (data.start_date && !data.end_date)
  {
      aguardandoRetirada = "#7d40e7";
      retirada = "#7d40e7";
  }

  if (!data.start_date && !data.end_date)
  {
      aguardandoRetirada = "#7d40e7";
  }
  return (
  <Container>
    <Header>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="local-shipping" size={24} color="#7d40e7" />
      </TouchableOpacity>
      <TextHeader>{data.product}</TextHeader>
    </Header>
    <TimeLine>
      <Circle background={aguardandoRetirada} />
      <Line></Line>
      <Circle background={retirada} />
      <Line></Line>
      <Circle background={entregue} />
    </TimeLine>
    <TimeLineStatus>
      <TimeLineText>Aguardando retirada</TimeLineText>
      <TimeLineText>Retirada</TimeLineText>
      <TimeLineText>Entregue</TimeLineText>
    </TimeLineStatus>
    <Footer>
    <View>
      <FooterText>Data</FooterText>
      {createdAt}
      </View>
      <View>
      <FooterText>Cidade</FooterText>
      <FooterData>{data.Recipient.city}</FooterData>
      </View>
      <FooterDetail
      onPress={() => {
        navigation.navigate('DeliveryDetail', {
          delivery: data,
        });
      }}
      >Ver detalhes</FooterDetail>
    </Footer>
  </Container>
  );
}
