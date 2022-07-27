import React from 'react'
import styled from 'styled-components'


const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url(${(props) => props.theme.bgHeaderDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 490px) {
        background-image: url(${(props) => props.theme.bgHeaderMobile});
        height: 200px;
        transition: all 0.5s ease-in-out;
    }
`

const Header = () => {
  return (
    <Container>
    </Container>
  )
}

export default Header