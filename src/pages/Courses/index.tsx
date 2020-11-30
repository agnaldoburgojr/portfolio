import React from 'react';
import { Container, Title, Content} from './styles'

const Courses: React.FC = () => {
  return (
    <Container>
      <Title>Formação e cursos</Title>
      <Content>
        <ul>
          <li>Análise e Desenvolvimento de Sistemas - <b>Fatec Ourinhos (2014- 2016)</b></li>
          <li>Bootcamp GoStack - <b>Rocketseat (Concluindo)</b></li>
          <li>React, Hooks, Recoil, TDD, Clean Architecture - <b>Udemy (Cursando)</b></li>
          <li>Desenvolvimento Rest/Restful APIs com Ruby on Rails - <b>Udemy (2019)</b></li>
          <li>TDD com Ruby on Rails, RSPec e Capybara  - <b>Udemy (2019)</b></li>
        </ul>
      </Content>
    </Container>
  );
};

export default Courses;
