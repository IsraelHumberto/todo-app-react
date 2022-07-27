import styled from "styled-components";

export const Container = styled.input`
    width: 100%;
    font-size: 18px;
    font-family: 'Josefin Sans';
    padding: 10px;
    margin: 22px 0;
    border-radius: 5px;
    border: transparent;
    outline: 0;
    color: ${props => props.theme.colors.textMain};

    &::placeholder {
        color: ${props => props.theme.colors.textMain}
    }
`