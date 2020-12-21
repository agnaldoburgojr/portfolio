import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fbfbfb;
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
`



export const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 200px;
  background-color: #151C26;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #fbfbfb;
    width: 300px;
    text-align: center;
  }

`

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  position: relative;

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

  span {
    color: #E4E4E4;
    font-size: 72px;
    font-weight: 800;
    position: absolute;
    top: -12px;
    left: 300px;

  }
`;

export const Section = styled.section`
    margin-left: 72px;
`;


export const List = styled.div`
   margin-left: 42px;

`
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  h3 {
    font-family: 'Montserrat', sans-serif;
    color:  #485466;
    font-weight: 800;
    font-size: 28px;

  }

  span {
    color:  #151C26;
    margin-left: 12px;
  }

`