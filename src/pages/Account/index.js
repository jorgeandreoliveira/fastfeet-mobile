import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { parseISO, format } from 'date-fns';
import api from '~/services/api';
import { Container, Center, Avatar, Profile, Label, Data, Logout, LogoutText } from './styles';

export default class Account extends Component {

  state = {
    id: 0,
    user: {},
  };

  async componentDidMount() {
    const id = await AsyncStorage.getItem('@user');

    this.setState({ id });

    const response = await api.get(`/deliveryman/${this.state.id}`);

    this.setState({ user: response.data});

    // console.log(this.state.user.created_at);
  }

  async handleExit() {
    AsyncStorage.removeItem('@user');
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  render() {

    let createdAt;

    if (this.state.user.created_at) {
      createdAt = <Data>{format(parseISO(this.state.user.created_at), "dd'/'MM'/'yyyy")}</Data>
    }
    else {
      createdAt = <Data>{this.state.user.created_at}</Data>
    }

    return (
      <Container>

          <Avatar source={{ uri: 'https://api.adorable.io/avatar/50/abott@adorable.png'}}
          />
        <Profile>
          <Label>Nome completo</Label>
          <Data>{this.state.user.name}</Data>
          <Label>Email</Label>
          <Data>{this.state.user.email}</Data>
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
