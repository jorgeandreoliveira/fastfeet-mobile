import React, {Component} from 'react';
import Header from '~/components/Header';
import { Container, Content, SubmitButton, SubmitButtonText } from './styles';
import api from '~/services/api';

export default class DeliveryConfirm extends Component {

  state = {
    delivery: null,
  };

  async componentDidMount() {

    const { delivery } = this.props.navigation.state.params;

    this.setState({delivery: delivery});
  }

  handleDeliveryConfirm = async () => {

    const { id } = this.state.delivery;

    const response = await api.put(`/delivery/${id}`, {
      id: id,
      end_date: new Date(),
    });

    this.setState({delivery: response.data});

    const { navigation } = this.props;
    navigation.navigate('DeliveryDetail', {
      delivery: this.state.delivery,
    });
  };

  render() {
    return (
      <Container>
          <Header text={'Confirmar entrega'} />
          <Content>
            <SubmitButton onPress={this.handleDeliveryConfirm}>
              <SubmitButtonText>Enviar</SubmitButtonText>
            </SubmitButton>
          </Content>
      </Container>
    );
  }
}
