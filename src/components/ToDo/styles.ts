import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 100px auto;
    padding: 12px 60px;

    @media screen and (max-width: 490px) {
        margin: 80px auto;
    }
`

export const ToDoHeader  = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .logo {
        color: #fff;
        font-size: 36px;
        letter-spacing: 15px;
        font-weight: 700;
    }

;
`