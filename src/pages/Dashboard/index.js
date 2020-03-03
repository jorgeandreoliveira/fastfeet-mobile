import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Delivery from '~/components/Delivery';
import { Container, Left, Avatar, Info, Welcome, Name,
  DeliveryTitle, Filter, FilterTitle, FilterHeader }
from './styles';

export default class Dashboard extends Component {

  state = {
    user: {},
  };

  // async componentDidMount() {
  //   const user = await AsyncStorage.getItem('@user');

  //   this.setState({ user: JSON.parse(user) });
  // }

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
        <Icon name="exit-to-app" size={24} color="#e74040" />
      </TouchableOpacity>
      {/* <List
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <Delivery data={item} />
        )}
      /> */}
    </Container>
    <FilterHeader>
      <DeliveryTitle>Entregas</DeliveryTitle>
      <Filter>
        <FilterTitle>Pendentes</FilterTitle>
        <FilterTitle>Entregues</FilterTitle>
      </Filter>
    </FilterHeader>
    <Delivery></Delivery>
    <Delivery></Delivery>
    </>
  );
  }
}
