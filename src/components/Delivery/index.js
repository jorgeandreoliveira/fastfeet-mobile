import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, TextHeader, Status,
  Footer, FooterText, FooterData, FooterDetail } from './styles';

export default function Delivery() {
  return (
  <Container>
    <Header>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="local-shipping" size={24} color="#7d40e7" />
      </TouchableOpacity>
      <TextHeader>Encomenda</TextHeader>
    </Header>
    <Status>

    </Status>
    <Footer>
    <View>
      <FooterText>Data</FooterText>
      <FooterData>10/03/2020</FooterData>
      </View>
      <View>
      <FooterText>Cidade</FooterText>
      <FooterData>Niterói</FooterData>
      </View>
      <FooterDetail>Ver detalhes</FooterDetail>
    </Footer>
  </Container>
  );
}
