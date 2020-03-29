import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Center, Avatar, Profile, Label, Data, Logout, LogoutText } from './styles';

export default class Account extends Component {

  state = {
    user: {},
    data: [],
  };

  async componentDidMount() {
    const user = await AsyncStorage.getItem('@user');

    this.setState({ user: JSON.parse(user) });

  }

  async handleExit() {
    AsyncStorage.removeItem('@user');
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  render() {
    Account.navigationOptions = {
      tabBarLabel: 'Meu Perfil',
    };

  return (
    <Container>
      <Center>
        <Avatar source={{ uri: 'https://api.adorable.io/avatar/50/abott@adorable.png'}}
        />
      </Center>
      <Profile>
        <Label>Nome completo</Label>
        <Data>{this.state.user.name}</Data>
        <Label>Email</Label>
        <Data>{this.state.user.email}</Data>
        <Label>Data de cadastro</Label>
        <Data>{this.state.user.created_at}</Data>
      </Profile>
      <Logout title="Logout" onPress={() => {this.handleExit()}}>
        <LogoutText>Logout</LogoutText>
      </Logout>
    </Container>
  );
  }
}
