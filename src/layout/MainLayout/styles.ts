import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { shade } from 'polished'
interface LinkProps {
  isActive?: boolean;
}

interface ContainerProps {
  backgroundIndex?: number;
}

export const Container = styled.div<ContainerProps>`
   ${props =>
    props.backgroundIndex !== 0 &&
    css`
     background-color: #fff
    `};
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 720px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(LinkRouter)<LinkProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-decoration: none;
    color: #101010; 
    padding: 2px 0;
    transition: color 0.2s;
    ${props =>
    props.isActive &&
    css`
      border-bottom: 2px solid  #ff5900;
      color: #ff5900;
      font-weight: 700;
      
    `}

    &:hover {
      color: #ff5900;
    }
`