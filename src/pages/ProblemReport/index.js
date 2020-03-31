import React, {Component} from 'react';
import Header from '~/components/Header';
import { Container, Content, TextInput, SubmitButton, SubmitButtonText }
from './styles';
import api from '~/services/api';

export default class ProblemReport extends Component {

  state = {
    delivery: null,
    value: null,
  };

  async componentDidMount() {
    this.setState({delivery: this.props.navigation.state.params})
  }

  handleProblemReport = async () => {

    const { id } = this.state.delivery.delivery;

    await api.post(`/delivery/${id}/problems`, {
      delivery_id: id,
      description: this.state.value,
    });

    const { navigation } = this.props;
    navigation.navigate('DeliveryDetail', {
      delivery: this.state.delivery.delivery,
    });
  };

  render() {
    return (
      <Container>
          <Header text={'Informar problema'} />
          <Content>
            <TextInput
              onChangeText={text => this.setState({value:text})}
              multiline={true}
              textAlignVertical='top'
              placeholder='Inclua aqui o problema que ocorreu na entrega.'
            />
            <SubmitButton onPress={this.handleProblemReport}>
            <SubmitButtonText>Enviar</SubmitButtonText>
          </SubmitButton>
          </Content>
      </Container>
    );
  }
}
