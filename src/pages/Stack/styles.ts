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
  margin-top: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
`

export const Card = styled.div`
  width: calc(33.3% - 12px);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  background: #5440cc;
  padding: 16px;
  color: #fff;

  h3 {
    font-family: 'Roboto Slab', serif;
  }

  ul {
    font-family: 'Roboto', sans-serif;
    margin-left: 16px;
    margin-top: 16px;

    li {
      font-size: 15px;
      line-height: 1.2;
      margin-bottom: 8px;
    }
  }
`