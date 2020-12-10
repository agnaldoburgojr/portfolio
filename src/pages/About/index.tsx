import React from 'react';
import { Container, Title, Content, Photo, Description } from './styles'
import profile from '../../assets/photo4.png'

const About: React.FC = () => {
  
  return (
    <Container>
      <Title>Um pouco sobre mim</Title>
      <Content>
        <Photo>
          <img src={profile} alt='profile'/>
        </Photo>
        <Description>
          <p>Tenho 29 anos, solteiro e resido atualmente em Marília-SP. Sou formado em Análise e Desenvolvimento de Software pela FATEC de Ourinhos atuo com desenvolvimento de software de forma ativa há 6 anos sendo desenvolvedor full-stack, atuando no frontend, backend e mobile.</p>
          <br/>
          <p>Minha experiência com tecnologia começa como freelancer e após alguns projetos desafiadores entro na fintech Yapay, onde pude aprender muita coisa sobre projetos mais robustos, tecnologias do mercado e organizações. Antes disso, tive uma grande carreira como músico e regente. Convido a assistir um dos meus grandes resultados, que mostra muito sobre mim. <a href="https://www.youtube.com/watch?v=ovyoDFO6pQo" target="blank">Clique aqui</a>!</p>
          <br/>
          <p>Sou vegano, músico baterista e percussionista, gosto muito de praticar esportes, jogar xadrez, leituras de desenvolvimento pessoal e negócios, e não posso deixar de mencionar: acampar e viajar! Sou muito grato e apaixonado pela vida.</p>
        </Description>
      </Content>
      
    </Container>
  );
};

export default About;
