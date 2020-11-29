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
`
export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
 

  img {
    width: 200px;
    border-radius: 100px;
  }
`
export const Description = styled.div`
  width: 900px;
  margin-left: 52px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

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