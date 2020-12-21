import styled, { css } from 'styled-components'
import { shade } from 'polished';


export const Container = styled.div`
  background-color: #151C26;
  width: 100%;
  max-height: 700px;
  height: 100vh;
  
  font-family: 'Open Sans', sans-serif;
  color: #FBFBFB;
  font-weight: 400;
  font-size: 16px;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  width: 80%;
  padding-top: 24px;

  display: flex;
  flex-direction: column;

  p {
    color: #7a7a7a;
    width: 480px;
  }
`
export const TextContent = styled.div`
  margin-top: 100px;
`

export const Social = styled.div`
  display: flex;
  margin-top: 16px;

  svg {
    color: #7a7a7a;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#7a7a7a')};
    } 
  }

  a  + a {
    margin-left: 12px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    font-size: 16px;
  }
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 36px;

  h1 {
    color: #FBFBFB;
    font-size: 60px;
    font-weight: 800;
  }

  h2 {
    margin-top: -20px;
    color: #485466;
    font-size: 80px;
    font-weight: 800;
  }
`;