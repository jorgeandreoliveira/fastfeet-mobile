import React, {Component} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Header from '~/components/Header';
import { Container, Content, LeftText, RightText, ListItem } from './styles';
import api from '~/services/api';

export default class ProblemList extends Component {

  state = {
    delivery: {},
  };

  async componentDidMount() {

    const { deliveryId } = this.props.navigation.state.params;

    const response = await api.get(`/delivery/${deliveryId}`);

    this.setState({delivery: response.data });
  }

  renderItem = ({ item }) => (
    <ListItem>
      <LeftText>{item.description}</LeftText>
      <RightText>{item.created_at}</RightText>
    </ListItem>
  );

  render() {
    return (
      <Container>
          <Header text={'Visualizar problemas'} subtext={this.state.delivery.product} />
          <Content>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={styles.list}
            data={this.state.delivery.DeliveryProblems}
            renderItem={this.renderItem}
            keyExtractor={item => item.id.toString()}
          />
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
});
