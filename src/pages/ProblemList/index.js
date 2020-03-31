import React, {Component} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Header from '~/components/Header';
import { Container, Content, LeftText, RightText, ListItem } from './styles';

export default class ProblemList extends Component {

  state = {
    product: null,
    problems: null,
  };

  async componentDidMount() {

    const { product } = this.props.navigation.state.params;
    const { problems } = this.props.navigation.state.params;

    this.setState({problems: problems});
    this.setState({product: product});
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
          <Header text={'Visualizar problemas'} subtext={this.state.product} />
          <Content>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={styles.list}
            data={this.state.problems}
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
