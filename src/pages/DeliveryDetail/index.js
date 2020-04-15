import React, {Component} from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import api from '~/services/api';
import { Container, Delivery, DeliveryHeader, TextHeader,
  DeliveryInfo, TextInfo, DataInfo, StatusHeader, StatusInfo, StatusInfoDate,
  DeliveryStatus, Buttons, TextButtons, IconButtons, ViewButtons, Rect } from './styles';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DeliveryDetail extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    deliveryUpdated:{},
  };

  handleStartDelivery = async () => {

    const { delivery } = this.props.navigation.state.params;

    await api.put(`/delivery/${delivery.id}`, {
      start_date: new Date(),
      deliveryman_id: delivery.deliveryman_id,
    }).catch(error => {
      console.log(Alert.alert(
        "",
        error.response.data.error,
        ))
    })

    const response = await api.get(`/delivery/${delivery.id}`);

    this.setState({deliveryUpdated: response.data });

    const { navigation } = this.props;
    navigation.navigate('DeliveryDetail', {
      delivery: this.state.deliveryUpdated,
    });
  };

  render() {
    const { delivery } = this.props.navigation.state.params;
    const { navigation } = this.props;

    let startDate;

    if (delivery.start_date) {
      startDate = <DataInfo>{format(parseISO(delivery.start_date), "dd'/'MM'/'yyyy")}</DataInfo>
    }
    else {
      startDate = <DataInfo>{delivery.start_date}</DataInfo>
    }

    let endDate;

    if (delivery.end_date) {
      endDate = <DataInfo>{format(parseISO(delivery.end_date), "dd'/'MM'/'yyyy")}</DataInfo>
    }
    else {
      endDate = <DataInfo>{delivery.end_date}</DataInfo>
    }

    return (
      <Container>
          <Header text={'Detalhes da encomenda'} />
          <Delivery>
            <DeliveryHeader>
                <Icon name="local-shipping" size={24} color="#7d40e7" />
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
            <Icon name="event" size={24} color="#7d40e7" />
          <TextHeader>Informações da entrega</TextHeader>
          </StatusHeader>
          <StatusInfo>
            <TextInfo>STATUS</TextInfo>
            <DataInfo>{delivery.status}</DataInfo>
          </StatusInfo>
          <StatusInfoDate>
            <View>
              <TextInfo>DATA DE RETIRADA</TextInfo>
              {startDate}
            </View>
            <View>
              <TextInfo>DATA DE ENTREGA</TextInfo>
              {endDate}
            </View>
          </StatusInfoDate>
          </Delivery>
          <Buttons>
          <ViewButtons>
              <TouchableOpacity onPress={this.handleStartDelivery}>
                <Icon name="add-circle-outline" size={24} color="#82BF18" />
              </TouchableOpacity>
              <TextButtons>Retirar</TextButtons>
              <TextButtons>encomenda</TextButtons>
            </ViewButtons>
            <Rect/>
            <ViewButtons>
              <TouchableOpacity onPress={() => {
                navigation.navigate('ProblemReport', {
                  delivery: delivery,
                });
              }}>
                <Icon name="highlight-off" size={24} color="#e74040" />
              </TouchableOpacity>
              <TextButtons>Informar</TextButtons>
              <TextButtons>problema</TextButtons>
            </ViewButtons>
            <Rect/>
            <ViewButtons>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ProblemList', {
                  deliveryId: delivery.id
                });
              }}>
                <Icon name="info-outline" size={24} color="#e7ba40" />
              </TouchableOpacity>
              <TextButtons>Visualizar</TextButtons>
              <TextButtons>problemas</TextButtons>
            </ViewButtons>
            <Rect/>
            <ViewButtons>
            <TouchableOpacity onPress={() => {
                navigation.navigate('DeliveryConfirm', {
                  delivery: delivery,
                });
              }}>
                <Icon name="alarm-on" size={24} color="#7d40e7" />
              </TouchableOpacity>
              <TextButtons>Confirmar</TextButtons>
              <TextButtons>entrega</TextButtons>
            </ViewButtons>
          </Buttons>
      </Container>
    );
  }
}
