import styled from 'styled-components';

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0d1117;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #c9d1d9;
    margin-top: 2rem;
`;
export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;    
`;
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: #FF0000;
    font-weight: 600;
    margin-top: 1rem;
`;