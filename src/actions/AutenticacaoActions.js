//Actions creators
export const modificaEmail = Text => {
  return {
    type: 'modifica_email',
    payload: Text,
  };
};

export const modificaSenha = Text => {
  return {
    type: 'modifica_senha',
    payload: Text,
  };
};

export const modificaNome = Text => {
  return {
    type: 'modifica_nome',
    payload: Text,
  };
};
