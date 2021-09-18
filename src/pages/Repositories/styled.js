import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #0d1117;
`;
export const Content = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
    background-color: #0d1117;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #c9d1d9;

`;
export const List = styled.ul`
    list-style: nome;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`;
export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    border-style: groove;
    border-color: #c9d1d9;
`;
// Estilizando componente React
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    border-style: groove;
    border-color: #c9d1d9;
`;