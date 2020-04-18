import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { parseISO, format } from 'date-fns';
import api from '~/services/api';
import { Container, Center, Avatar, AvatarInput, Profile, Label, Data, Logout, LogoutText } from './styles';

export default class Account extends Component {

  state = {
    id: 0,
    deliveryMan: {},
  };

  async componentDidMount() {
    const id = await AsyncStorage.getItem('@user');

    this.setState({ id });

    const response = await api.get(`/deliveryman/${this.state.id}`);

    this.setState({ deliveryMan: response.data});
  }

  async handleExit() {
    AsyncStorage.removeItem('@user');
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  render() {

    let createdAt;

    if (this.state.deliveryMan.created_at) {
      createdAt = <Data>{format(parseISO(this.state.deliveryMan.created_at), "dd'/'MM'/'yyyy")}</Data>
    }
    else {
      createdAt = <Data>{this.state.deliveryMan.created_at}</Data>
    }

    return (
      <Container>
          <Avatar>
          <AvatarInput source={{ uri: this.state.deliveryMan.avatar ? this.state.deliveryMan.avatar.url : 'https://api.adorable.io/avatar/50/abott@adorable.png'}} />
          </Avatar>
        <Profile>
          <Label>Nome completo</Label>
          <Data>{this.state.deliveryMan.name}</Data>
          <Label>Email</Label>
          <Data>{this.state.deliveryMan.email}</Data>
          <Label>Data de cadastro</Label>
          {createdAt}
        </Profile>
        <Logout title="Logout" onPress={() => {this.handleExit()}}>
          <LogoutText>Logout</LogoutText>
        </Logout>
      </Container>
    );
  }
}
