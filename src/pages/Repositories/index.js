import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useHistory } from 'react-router-dom';


// Função que trata e retorna os dados dos repositórios da localStorage.
export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/');
        }

    }, []);

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>Repositórios</Styled.Title>
                <Styled.List>
                    {repositories.map(repository => {
                        return (
                            <Styled.ListItem>Repositório: {repository} </Styled.ListItem>
                        )
                    })}
                </Styled.List>

                <Styled.LinkHome to="/">Voltar</Styled.LinkHome>

            </Styled.Content>
        </Styled.Container>
    )
}