const INITIAL_STATE = {
    email: '',
    senha: '',
  };
  
  const AutenticacaoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      // case para diferentes ações, se houver
      default:
        return state;
    }
  };
  
  export default AutenticacaoReducer;
  