import styled from 'styled-components'

export const Container = styled.div`
  width: 84%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #fff;
`

export const Title = styled.h2`
  font-family: 'Roboto Slab', serif;
  margin-top: 48px;
  font-size: 28px;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 72px;
`
export const Photo = styled.div`
  display: flex;

  img {
    width: 400px;
    border-radius: 100px;
  }
`
export const Description = styled.div`
  width: 700px;
  margin-left: 52px;
  font-family: 'Roboto', sans-serif;

  a {
    text-decoration: none;
    color: #ff5900;
  }

  p {
    text-align: justify;
    text-indent: 48px;
    line-height: 1.4
  }
`