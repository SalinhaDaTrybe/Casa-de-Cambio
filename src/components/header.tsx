import React from 'react';

type MainProps = {
  titulo?: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  fetchMoney: () => void;
};

function Header({ titulo = 'Padrao', handleChange, fetchMoney }: MainProps) {
  return (
    <div>
      <h1>{titulo}</h1>
      <input type="text" onChange={ handleChange } />
      <button onClick={ fetchMoney }>Pesquisar</button>
    </div>
  );
}

export default Header;
