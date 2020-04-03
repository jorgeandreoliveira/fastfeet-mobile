import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, TextHeader, Status,
  Footer, FooterText, FooterData, FooterDetail } from './styles';

export default function Delivery({data, navigation}) {
  const dateParsed = useMemo(() => {
      return parseISO(data.start_date);
    }
  );

  let createdAt;

    if (data.created_at) {
      createdAt = <FooterData>{format(parseISO(data.created_at), "dd'/'MM'/'yyyy")}</FooterData>
    }
    else {
      createdAt = <FooterData>{data.created_at}</FooterData>
    }

  return (
  <Container>
    <Header>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="local-shipping" size={24} color="#7d40e7" />
      </TouchableOpacity>
      <TextHeader>{data.product}</TextHeader>
    </Header>
    <Status>
    </Status>
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
