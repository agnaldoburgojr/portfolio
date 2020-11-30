import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, Content} from './styles'

const Indie: React.FC = () => {
  const history = useHistory()

  const handleClique = useCallback(()=> {
    history.push('/')
  }, [history])

  return (
    <Container>
    <Content>
      <Title>
        <h2>Por que quero fazer parte da <span>Indie Campers</span>?</h2>
      </Title>
      
      <h3>A Indie Campers é uma empresa que se preocupa com o bem estar e alegria das pessoas por meio de viagens e experiências e eu gostaria de fazer parte disso</h3>
      <h3>É uma empresa em crescimento e eu quero ter a oportunidade de crescer junto e fazer parte deste crescimento</h3>
      <h3>Gostaria de somar com meu conhecimento e acredito que posso ajudar a transformar a parte tecnológica da empresa, desenvolvendo excelentes aplicações</h3>
      <h3>Acredito poder ajudar nas necessidades futuras da empresa, pensando em novas aplicações, tanto web como mobile e novas features</h3>
      <h3>Certamente irei me empenhar para atingir os objetivos da empresa, aprendendo o que for necessário para o crescimento</h3>
      <h3>Porque sonho há tempo em poder ter experiências internacionais</h3>
      <button type='button' onClick={handleClique}>Voltar para a home</button>
    </Content>
    
  </Container>
  );
};

export default Indie;
