import styled, { css } from 'styled-components'
import { shade } from 'polished';
import { Link as LinkRouter } from 'react-router-dom'
interface LinkProps {
  isActive?: boolean;
}

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  max-height: 700px;
  height: 100vh;
  
  color: #fff;
  font-family: 'Roboto Slab', serif;
  display: flex;
  
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  width: 84%;

  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 72px;
    font-size: 32px;
    margin-bottom: 28px;

    span + span {
      color: #2c00e3;
      font-size: 40px;
    }
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 46px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.8;
    margin-bottom: 36px;
  }

  button {
      background: #ff5900;
      height: 48px;
      border-radius: 4px;
      border: 0;
      padding: 12px 60px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      margin-bottom: 40px;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background: ${shade(0.2, '#ff5900')};
      }
    }
`

export const Menu = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 70px;
`;

export const Hero = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

export const Social = styled.div`
  display: flex;

  svg {
    color: #2c00e3;
    font-size: 36px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#2c00e3')};
    }

    
  }

  a  + a {
    margin-left: 16px;
  }
`

export const Nav = styled.nav`
  width: 720px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(LinkRouter)<LinkProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-decoration: none;
    color: #fff; 
    padding: 2px 0;
    transition: color 0.2s;
    ${props =>
    props.isActive &&
    css`
      border-bottom: 2px solid #2c00e3;
      color: #2c00e3;
      font-weight: 700;
      
    `}

    &:hover {
      color: #2c00e3;
    }
`