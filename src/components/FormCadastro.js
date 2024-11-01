import React from 'react';
import {View, TextInput, Button, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
} from '../actions/AutenticacaoActions';

const FormCadastro = props => {
  console.log(props);
  return (
    <ImageBackground
      style={{flex: 1, width: null}}
      source={require('../img/bg.png')}>
      <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#FFFFFF"
            value={props.nome}
            style={{fontSize: 20, height: 45, color: '#FFFFFF'}}
            onChangeText={text => props.modificaNome(text)}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#FFFFFF"
            value={props.email}
            style={{fontSize: 20, height: 45, color: '#FFFFFF'}}
            onChangeText={text => props.modificaEmail(text)}
          />
          <TextInput
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            value={props.senha}
            style={{fontSize: 20, height: 45, color: '#FFFFFF'}}
            onChangeText={text => props.modificaSenha(text)}
          />
        </View>
        <View style={{flex: 1}}>
          <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  console.log('ESTADO DA APLICAÇÃO=>', state);
  return {
    nome: state.AutenticacaoReducer?.nome || '',
    email: state.AutenticacaoReducer?.email || '',
    senha: state.AutenticacaoReducer?.senha || '',
  };
};
export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  modificaNome,
})(FormCadastro);
