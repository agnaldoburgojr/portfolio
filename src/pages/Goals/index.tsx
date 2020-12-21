import React from 'react';
import { Container, Title, Content, Section, Circle, List, Item } from './styles';

const Goals: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <Circle>
            <p>Tornar-me um excelente<br/> arquiteto e engenheiro de software capaz de liderar times e capacitar outros desenvolvedores para desenvolver soluções de software eficazes para resolver os problemas de nossos parceiros, sempre com ética e respeito por todos.</p>
          </Circle>
        </div>
        <Section>
          <Title>
            <div>
              <h2>missão, visão</h2>
              <h3>objetivos</h3>
            </div>
            <span>&</span>
          </Title>
          <List>
            <Item>
              <h3>1.</h3>
              <span>Estar alinhado com os objetivos do time, da equipe e da empresa;</span>
            </Item>
            <Item>
              <h3>2.</h3>
              <span>Entregar software de qualidade procurando as melhores soluções com eficácia e eficiência;</span>
            </Item>
            <Item>
              <h3>3.</h3>
              <span>Aprender com quem sabe mais e compartilhar meu conhecimento e experiências com todos; </span>
            </Item>
            <Item>
              <h3>4.</h3>
              <span>Ser proativo, vestir a camisa e executar!</span>
            </Item>

          </List>
        </Section>
        
      </Content>
     
    </Container>
  );
};

export default Goals;
