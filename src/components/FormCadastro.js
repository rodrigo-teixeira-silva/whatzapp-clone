import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';

const FormCadastro = props => {
  console.log(props)
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <TextInput placeholder="Nome" value={props.nome} style={{fontSize: 20, height: 45}} />
        <TextInput placeholder="E-mail" value={props.email} style={{fontSize: 20, height: 45}} />
        <TextInput placeholder="Senha" value={props.senha} style={{fontSize: 20, height: 45}} />
      </View>
      <View style={{flex: 1}}>
        <Button title="Cadastrar" color="#115E54" onPress={() => false} />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
 console .log('ESTADO DA APLICAÇÃO=>', state)
  return{
  nome: state.AutenticacaoReducer?.nome || '',
  email: state.AutenticacaoReducer?.email || '',
  senha: state.AutenticacaoReducer?.senha || '',
}
}
export default connect(mapStateToProps, null)(FormCadastro);
