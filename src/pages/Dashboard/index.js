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
    user: {},
    data: [],
  };

  async componentDidMount() {
    const user = await AsyncStorage.getItem('@user');

    this.setState({ user: JSON.parse(user) });

    const response = await api.get(`/deliveryman/${this.state.user.id}/false`);

    this.setState({ data: response.data});
  }

  async handleDelivered() {

    const response = await api.get(`/deliveryman/${this.state.user.id}/true`);

    this.setState({ data: response.data});

  }

  async handlePending() {

    const response = await api.get(`/deliveryman/${this.state.user.id}/false`);

    this.setState({ data: response.data});
  }

  async handleExit() {

    AsyncStorage.removeItem('@user');
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  render() {
    Dashboard.navigationOptions = {
      tabBarLabel: 'Entregas',
    };

  return (
    <>
    <Container>
      <Left>
        <Avatar source={{ uri: 'https://api.adorable.io/avatar/50/abott@adorable.png'}}
        />
        <Info>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>Gaspar Antunes</Name>
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
