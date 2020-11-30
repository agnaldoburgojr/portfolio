import styled from 'styled-components'

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  background-color: #fff;

  > div {
    display: flex;

    img {
      width: 400px;
    }
  }
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
    width: 700px;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    color: #555;

    li {
      margin-bottom: 16px;

      b {
        color: #ff5900;
      }
    }
  }

  a {
    text-decoration: none;
    color: #ff5900;
  }

`