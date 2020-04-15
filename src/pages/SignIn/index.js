import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '~/assets/logo.png';
import api from '~/services/api';
import { Container, Form, Input, SubmitButton, SubmitButtonText} from './styles';

export default class SignIn extends Component {

  // static propTypes = {
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func,
  //   }).isRequired,
  // };

  state = {
    id: 0,
    user: {},
  };

  // async componentDidUpdate(_, prevState) {

  //   console.log('componentDidUpdate');

  //   const { user } = this.state;

  //   console.log(this.state);

  //   if (prevState.user != user) {
  //     AsyncStorage.setItem('user', JSON.stringify(user));
  //   }
  // };

  handleLogin = async () => {
    const { id } = this.state;
    const { navigation } = this.props;

    const response = await api.get(`/deliveryman/${id}`);

    this.setState({user:response.data});

    await AsyncStorage.setItem('@user', this.state.user.id.toString());

    navigation.navigate('Dashboard');
  };

  render() {

    return (
      <Container>
        <Image source={logo} />
        <Form>
          <Input
            placeholder="Informe seu ID de cadastro"
            onChangeText={text => this.setState({ id: text })}>
          </Input>
          <SubmitButton onPress={this.handleLogin}>
            <SubmitButtonText>Entrar no sistema</SubmitButtonText>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
