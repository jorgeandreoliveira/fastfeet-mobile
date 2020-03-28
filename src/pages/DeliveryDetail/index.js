import React, {Component} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Text, Delivery, DeliveryHeader, TextHeader,
  DeliveryInfo, TextInfo, DataInfo, StatusHeader, StatusInfo, StatusInfoDate,
  DeliveryStatus, Buttons, TextButtons, IconButtons, ViewButtons, Rect } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DeliveryDetail extends Component {
  render() {
    const { delivery } = this.props.navigation.state.params;
    return (
      <Container>
          <Header>
            <Text>Detalhes da encomenda</Text>
          </Header>
          <Delivery>
            <DeliveryHeader>
              <TouchableOpacity onPress={() => {}}>
                <Icon name="local-shipping" size={24} color="#7d40e7" />
              </TouchableOpacity>
              <TextHeader>Informações da entrega</TextHeader>
          </DeliveryHeader>
          <DeliveryInfo>
              <TextInfo>DESTINATÁRIO</TextInfo>
              <DataInfo>{delivery.Recipient.name}</DataInfo>
              <TextInfo>ENDEREÇO DE ENTREGA</TextInfo>
              <DataInfo>{delivery.Recipient.street}, {delivery.Recipient.number}, {delivery.Recipient.city} - {delivery.Recipient.state}, {delivery.Recipient.zipcode}
              </DataInfo>
              <TextInfo>PRODUTO</TextInfo>
              <DataInfo>{delivery.product}</DataInfo>
          </DeliveryInfo>
          <StatusHeader>
              <TouchableOpacity onPress={() => {}}>
                <Icon name="event" size={24} color="#7d40e7" />
              </TouchableOpacity>
              <TextHeader>Informações da entrega</TextHeader>
          </StatusHeader>
          <StatusInfo>
            <TextInfo>STATUS</TextInfo>
            <DataInfo>{delivery.status}</DataInfo>
          </StatusInfo>
          <StatusInfoDate>
            <View>
              <TextInfo>DATA DE RETIRADA</TextInfo>
              <DataInfo>{delivery.start_date}</DataInfo>
            </View>
            <View>
              <TextInfo>DATA DE ENTREGA</TextInfo>
              <DataInfo>{delivery.end_date}</DataInfo>
            </View>
          </StatusInfoDate>
          <Buttons>
            <ViewButtons>
              <IconButtons onPress={() => {}}>
                <Icon name="highlight-off" size={24} color="#e74040" />
              </IconButtons>
              <TextButtons>Informar</TextButtons>
              <TextButtons>problema</TextButtons>
            </ViewButtons>
            <Rect/>
            <ViewButtons>
              <IconButtons onPress={() => {}}>
                <Icon name="info-outline" size={24} color="#e7ba40" />
              </IconButtons>
              <TextButtons>Visualizar</TextButtons>
              <TextButtons>problemas</TextButtons>
            </ViewButtons>
            <Rect/>
            <ViewButtons>
              <IconButtons onPress={() => {}}>
                <Icon name="alarm-on" size={24} color="#7d40e7" />
              </IconButtons>
              <TextButtons>Confirmar</TextButtons>
              <TextButtons>entrega</TextButtons>
            </ViewButtons>
          </Buttons>
          </Delivery>
      </Container>
    );
  }
}
