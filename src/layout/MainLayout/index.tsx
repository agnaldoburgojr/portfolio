import React, { useState, useCallback } from 'react';
import { Container, Header, Nav, Link } from './styles'

const MainLayout: React.FC = ({children}) => {
  const [index, setIndex] = useState(0)

  const handleClick = useCallback((newIndex: number)=>{
    setIndex(newIndex)
  }, [])

  return (
    <Container backgroundIndex={index}>
      <Header>
        <Nav>
          <Link to="/" isActive={index === 0} onClick={()=> handleClick(0)}>home</Link>
          <Link to="/about" isActive={index === 1} onClick={()=> handleClick(1)}>sobre mim</Link>
          <Link to="/stack" isActive={index === 2} onClick={()=> handleClick(2)}>stack e interesses</Link>
          <Link to="/courses" isActive={index === 3} onClick={()=> handleClick(3)}>formação</Link>
          <Link to="/projects" isActive={index === 4} onClick={()=> handleClick(4)}>projetos</Link>
          <Link to="/goals" isActive={index === 5} onClick={()=> handleClick(5)}>objetivos como dev</Link>
        </Nav>
      </Header>
      {children}
    </Container>
  );
};

export default MainLayout;
