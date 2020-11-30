import styled from 'styled-components'
import { shade } from 'polished';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  font-family: 'Roboto Slab', serif;
  display: flex;
  justify-content: center

`

export const Content = styled.div`
  margin-top: 48px;
  text-align: center;
  max-width: 800px;

  h2 {
    font-size: 28px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    margin-bottom: 26px;
    font-size: 16px;
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
  margin-bottom: 36px;

  span {
    color: #5440cc;
  }
`
