import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Delivery from '~/components/Delivery';
import api from '~/services/api';
import { Container, Left, Avatar, Info, Welcome, Name,
  DeliveryTitle, Filter, FilterTitle, FilterHeader, List }
from './styles';

export default class Dashboard extends Component {

  state = {
    id: 0,
    deliveryMan: {},
    data: [],
  };

  async componentDidMount() {
    const id = await AsyncStorage.getItem('@user');
    this.setState({ id });

    const responseDeliveryMan = await api.get(`/deliveryman/${this.state.id}`);

    this.setState({deliveryMan: responseDeliveryMan.data})

    const responseDelivery = await api.get(`/deliveryman/${this.state.id}/false`);

    this.setState({ data: responseDelivery.data});

  }

  async handleDelivered() {

    const response = await api.get(`/deliveryman/${this.state.id}/true`);

    this.setState({ data: response.data});
  }

  async handlePending() {

    const response = await api.get(`/deliveryman/${this.state.id}/false`);

    this.setState({ data: response.data});
  }

  async handleExit() {
    AsyncStorage.removeItem('@user');
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  render() {
  return (
    <>
    <Container>
      <Left>
        <Avatar source={{ uri: this.state.deliveryMan.avatar ? this.state.deliveryMan.avatar.url : 'https://api.adorable.io/avatar/50/abott@adorable.png'}}
        />
        <Info>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{this.state.deliveryMan.name}</Name>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="exit-to-app" size={24} color="#e74040" onPress={() => {this.handleExit()}} />
      </TouchableOpacity>
    </Container>
    <FilterHeader>
      <DeliveryTitle>Entregas</DeliveryTitle>
      <Filter>
        <FilterTitle onPress={() => {this.handlePending()}}>Pendentes</FilterTitle>
        <FilterTitle onPress={() => {this.handleDelivered()}}>Entregues</FilterTitle>
      </Filter>
    </FilterHeader>
       <List
        data={this.state.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Delivery data={item} navigation={this.props.navigation} />}
        />
    </>
  );
  }
}
