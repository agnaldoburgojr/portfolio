import React from 'react';
import { Container, Title, Content, Description } from './styles'
import profile from '../../assets/photo4.png'

const About: React.FC = () => {
  
  return (
    <Container>
      <Content>
        <Title>
          <h2>um pouco </h2>
          <h3>sobre mim</h3>
        </Title>
        <Description>
          <p>Tenho 29 anos, solteiro e resido atualmente em Marília-SP. Sou formado em Análise e Desenvolvimento de Software pela FATEC de Ourinhos. Atuo com desenvolvimento de software de forma ativa há 7 anos como desenvolvedor full-stack: frontend, backend e mobile. Participei de vários projetos de software como: software para plano de saúde, para gerenciamento de estudos escolares, controle de ordens de serviço e com meios de pagamento (especificamente com POS - máquina de cartão) e um robusto software de autenticação.</p>
          <br/>
          <p>Antes de ser um desenvolvedor de software fui músico, educador musical e regente de grupo de percussão. Tive uma bela carreira musical que me proporcionou muita alegria e habilidades profissionais essenciais para ser um bom líder e trabalhar em equipe. O vídeo a seguir mostra um dos meus grandes resultados na direção de um grupo e mostra também muito de mim. <a href="https://www.youtube.com/watch?v=ovyoDFO6pQo" target="blank">Clique aqui!</a></p>
          <br/>
          <p> Sou vegano; músico baterista e percussionista; gosto muito de praticar esportes; jogar xadrez; ler sobre desenvolvimento pessoal e negócios; viajar e sou muito grato a Deus pela minha vida.</p>
        </Description>
      </Content>
    </Container>
  );
};

export default About;
