import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha} from '../actions/AutenticacaoActions';

const FormLogin = props => {
  const navigation = useNavigation();
  console.log(props);

  return (
    <ImageBackground style={{flex: 1, width: null}} source={require('../img/bg.png')}>
      <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: '#FFFFFF' }}>WhatsApp</Text>
        </View>

        <View style={{flex: 2}}>
          <TextInput
            value={props.email}
            style={{fontSize: 20, height: 45, color: '#FFFFFF'}}
            placeholder="E-mail"
            placeholderTextColor= '#FFFFFF'
            onChangeText={Text => props.modificaEmail(Text)}
          />

          <TextInput
            value={props.senha}
            style={{fontSize: 20, height: 45, color: '#FFFFFF'}}
            placeholder="Senha"
             placeholderTextColor= '#FFFFFF'
            secureTextEntry
            onChangeText={Text => props.modificaSenha(Text)}
          />

          <TouchableHighlight
               placeholderTextColor= '#FFFFFF'

            onPress={() => navigation.navigate('FormCadastro')}>
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>
              Ainda não tem cadastro? Cadastre-se
            </Text >
          </TouchableHighlight>
        </View>

        <View style={{flex: 2}}>
          <Button title="Acessar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer?.email || '',
  senha: state.AutenticacaoReducer?.senha || '',
});

export default connect(mapStateToProps, {modificaEmail, modificaSenha})(
  FormLogin,
);
