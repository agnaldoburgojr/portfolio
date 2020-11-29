import styled from 'styled-components'

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  background-color: #fff;
`

export const Title = styled.h2`
  font-family: 'Roboto Slab', serif;
  margin-top: 48px;
  font-size: 28px;
`
export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;


  ul {
    width: 550px;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    color: #555;

    li {
      margin-bottom: 16px;
    }
  }
`
export const Section = styled.div`
  width: 590px;
  display: flex;
  justify-content: center;
  position: relative;
  padding-left: 40px;

  p {
    width: 400px;
    font-family: 'Roboto Slab', serif;
    font-size: 22px;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const MarkOne = styled.span`
  font-family: 'Roboto Slab', serif;
  font-size: 64px;
  color: #ff5900;
  position: absolute;
  top: -30px;
  left: 70px;
`

export const MarkTwo = styled.span`
  font-family: 'Roboto Slab', serif;
  font-size: 64px;
  color: #ff5900;
  position: absolute;
  bottom: -10px;
  right: 25px;
`