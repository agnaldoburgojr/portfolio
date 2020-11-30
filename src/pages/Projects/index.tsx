import React from 'react';
import { Container, Title, Content} from './styles'
import techs from '../../assets/techs.png'
const Projects: React.FC = () => {
  return (
    <Container>
      <Title>Principais experiências e projetos</Title>
      <div>
        <Content>
          <ul>
            <li><b>Yapay (2019 - 2020)</b> - Empresa fintech de meios de pagamentos da Locaweb. Trabalhei com o desenvolvimento de aplicação web e aplicativo para gerenciamento
              de POS (Máquina de Cartão), projetos de autenticação para sistemas da empresa</li>
            <li><b>Dié Orders (2020)</b> - Sistema próprio desenvolvido para gerenciamento de ordens de serviço para um despachante</li>
            <li><b>CIMA Saúde (2017 - 2018)</b> - Sistema próprio desenvolvido para gerenciamento de contratos de um plano de Saúde</li>
            <li><b>Projetos particulares e de estudos:</b> estão disponível no meu Github. <a href="https://github.com/agnaldoburgojr" target="blank">Clique aqui</a></li>
          </ul>
          
        </Content>
        <img src={techs} alt="techs"/>
      </div>
    </Container>
  );
};

export default Projects;