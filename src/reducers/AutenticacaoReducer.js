const INITIAL_STATE = {
  nome: 'rodrigo',
  email: 'rodrigo@email.com',
  senha: '123456',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  if (action.type == 'modifica_email') {
    return {...state, email: action.payload};
  }
  if (action.type == 'modifica_senha') {
    return {...state, senha: action.payload};
  }
  return state;
};
