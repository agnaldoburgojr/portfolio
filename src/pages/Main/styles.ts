import styled from 'styled-components'
import { shade } from 'polished';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  font-family: 'Roboto Slab', serif;

  > img {
    position: absolute;
    bottom: 0;
    left: 700px;

    & + img {
      left: 800px;
    }
  }
`

export const Content = styled.div`
  margin-top: 100px;
  max-width: 550px;

  h2 {
    font-size: 28px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 28px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    margin-bottom: 24px;
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

export const Title = styled.div`
  font-weight: 600;

  span {
    color: #5440cc;
  }
`