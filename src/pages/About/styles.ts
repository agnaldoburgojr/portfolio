import styled from 'styled-components'

export const Container = styled.div`
  background-color: #E4E4E4;
  width: 100%;
  
  font-family: 'Open Sans', sans-serif;
  color: #151C26;
  font-weight: 400;
  font-size: 16px;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  width: 80%;
  padding: 80px 0;
  

  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;

  h2 {
    color:  #485466;
    font-size: 42px;
    font-weight: 800;
  }

  h3 {
    margin-top: -16px;
    color: #151C26;
    font-size: 64px;
    font-weight: 800;
  }
`;

export const Description = styled.div`
  
  margin-left: 240px;

  a {
    text-decoration: none;
    color: #485466;
  }

  p {
    text-align: justify;
    text-indent: 48px;
    line-height: 1.4
  }
`