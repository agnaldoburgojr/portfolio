import React from 'react';
import { Container, Title, Content, Section, MarkOne, MarkTwo } from './styles';

const Goals: React.FC = () => {
  return (
    <Container>
      <Title>Objetivos, missão e visão</Title>

      <Content>
        <ul>
          <li>Estar alinhado e somar com os objetivos do grupo, equipe e empresa</li>
          <li>Desenvolver software de qualidade e continuar aprendendo novas técnicas de desenvolvimento</li>
          <li>Aprender novas ferramentas e tecnologias e abraçar os desafios que surgirem</li>
          <li>Aprender e evoluir junto com o time e com a empresa</li>
          <li>Somar com minha experiência e fazer o meu melhor onde eu estiver alocado</li>
          <li>Ensinar e orientar aqueles que possuem menos experiência</li>
          <li>Ser produtivo e consistente nas entregas</li>
          <li>Ser proativo e “vestir a camisa”</li>
        </ul>
        <Section>
          <MarkOne>"</MarkOne>
          <p>Tornar-me um excelente arquiteto e engenheiro de software capaz de liderar times e capacitar outros desenvolvedores para desenvolver soluções de software eficazes para resolver os problemas de nossos parceiros, sempre com ética e respeito por todos.</p>
          <MarkTwo>"</MarkTwo>
        </Section>
      </Content>
    </Container>
  );
};

export default Goals;
