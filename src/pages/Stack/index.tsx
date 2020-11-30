import React from 'react';
import { Title, Container, Content, Card } from './styles';

const Stack: React.FC = () => {
  return (
    <Container>
      <Title>Stack, principais conhecimentos e interesses</Title>
      <Content>
        <div>
          <Card>
            <h3>Backend</h3>
            <ul>
              <li>Desenvolvimento de APIs utilizando Ruby on Rails</li>
              <li>Desenvolvimento de APIs utilizando NodeJS (Express)</li>
            </ul>
          </Card>
          <Card>
            <h3>Frontend</h3>
            <ul>
              <li>Bastante experiência com React sendo minha principal “biblioteca” para frontend</li>
              <li>HTML, CSS e Javascript</li>
              <li>Frameworks como  Material UI, Bootstrap, Foundation</li>
              <li>Angular e VueJS: conhecimento básico</li>
            </ul>
          </Card>
         
          <Card>
            <h3>Mobile</h3>
            <ul>
              <li>React Native - construi alguns aplicativos, embora sem publicá-los, conheço bem a tecnologia</li>
              <li>Flutter - aprendi um pouco da linguagem e padrões de projeto, ainda muito que aprender</li>
            </ul>
          </Card>
        </div>

        <div>
        <Card>
            <h3>Arquitetura e engenharia</h3>
            <ul> 
              <li>Paixão por arquitetura e engenharia de software</li>
              <li>Constante evolução para conhecer e aplicar Design Patterns</li>
              <li>Cultura de desenvolvimento orientado a testes (TDD) e desenvolvimento de testes na aplicação</li>
            </ul>
          </Card>
          <Card>
            <h3>UX e design UI</h3>
            <ul>
              <li>Desenvolvimento de soluções e engenharia de requisitos</li>
              <li>Figma - Prototipação e desenvolvimento de interfaces</li>
            </ul>
          </Card>
          <Card>
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>CI/CD - Conhecimentos e prática. Conhecimento básico em configuração de pipelines e outras ferramentas</li>
            </ul>
          </Card>
          
          
        </div>

      </Content>
    </Container>
  );
};

export default Stack;
