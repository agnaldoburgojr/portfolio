import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Header } from './styles'

const MainLayout: React.FC = ({children}) => {
  return (
    <Container>
      <Header>
        <Link to="/">home</Link>
        <Link to="/about">sobre mim</Link>
        <Link to="/stack">stack e interesses</Link>
        <Link to="/courses">formação</Link>
        <Link to="/projects">projetos</Link>
        <Link to="/goals">objetivos como dev</Link>
      </Header>
      {children}
    </Container>
  );
};

export default MainLayout;
