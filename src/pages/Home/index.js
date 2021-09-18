import React, { useState } from 'react';
import axios from 'axios';
import * as Styled from './styled';
import { useHistory } from 'react-router-dom';


// Função que consome a API do GitHub e retorna a lista de repositórios.
export default function App(props) {

  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [ erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {

      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      // Salvando os nomes dos repositórios no localStorage
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  };
  return (
    <Styled.ContainerHome>
      <Styled.Title>Pesquisa de Repositórios</Styled.Title>
      <Styled.Content>
        <Styled.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <Styled.Button type="button" onClick={handlePesquisa}>Pesquisar</Styled.Button>
      </Styled.Content>
      { erro ? <Styled.ErrorMsg>Não achei este usuário. Tente novamente!</Styled.ErrorMsg> : '' }

    </Styled.ContainerHome>

  );
}