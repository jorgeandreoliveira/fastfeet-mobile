import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Header from '~/components/Header';
import { Container, Content, SubmitButton, SubmitButtonText } from './styles';
import api from '~/services/api';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class DeliveryConfirm extends Component {

  state = {
    delivery: {},
    photo: {},
  };

  async componentDidMount() {

    const { delivery } = this.props.navigation.state.params;

    this.setState({delivery: delivery});
  }

  handleDeliveryConfirm = async () => {

    const { id } = this.state.delivery;

    const data = new FormData();
    data.append('file', {
      uri: this.state.photo.uri,
      type: this.state.photo.type,
      name: this.state.photo.originalname,
    });

    const responseFile = await api.post('files', data);

    const { id: signature_id } = responseFile.data;

    await api.put(`/delivery/${id}`, {
      signature_id: signature_id,
    });

    const response = await api.get(`/delivery/${id}`);

    this.setState({delivery: response.data});

    const { navigation } = this.props;
    navigation.navigate('DeliveryDetail', {
      delivery: this.state.delivery,
    });
  };

  takePicture = async () => {
    const { id } = this.state.delivery;
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        photo:
        {
          uri: data.uri,
          type: 'image/jpeg',
          originalname: `recipinet_signature_id_${id}.jpg`,
        }
      });
    }
  }

  render() {
    return (
      <Container>
          <Header text={'Confirmar entrega'} />
          <Content>
          <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            captureAudio={false}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message: 'Este aplicativo necessita da sua autorização para usar a câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
          />
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}>
              <Icon name="photo-camera" size={24} />
            </TouchableOpacity>
          </View>
        </View>
            <SubmitButton onPress={this.handleDeliveryConfirm}>
              <SubmitButtonText>Enviar</SubmitButtonText>
            </SubmitButton>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 55,
  },
});
