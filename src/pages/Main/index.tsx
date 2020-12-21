import React, { useState, useCallback, useEffect } from 'react';
import { Container, Content, Header, TextContent, Title, Social } from './styles'
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";

const Main: React.FC = () => {
  const [word, setWord] = useState('')
  const [index, setIndex] = useState(0)

  const handleClick = useCallback((newIndex: number)=>{
    setIndex(newIndex)
  }, [])
  
  const addWord = useCallback((chars: string[]) => {
    chars.map((char, index) => setTimeout(() => {
        setWord(prevState => prevState + char)
      }, [1000 + 200 + index * 200])
    )
  }, [])

  useEffect(()=> {
    addWord(['w', 'o', 'r', 'l', 'd', '!'])
  }, [addWord])

  return (
    <Container>
      <Content>
        <Header>
          <FaBars/>
        </Header>
        <TextContent>
          <span>hello, world! Eu sou</span> 
          <Title>
            <h1>Agnaldo Burgo</h1>
            <h2>Junior</h2>
          </Title>
          <p>engenheiro e desenvolvedor de software e este é o meu portfólio, seja bem-vindo(a)!</p>
          <Social>
              <a href='https://www.linkedin.com/in/agnaldoburgojr/' target='blank'><FaLinkedin/></a>
              <a href='https://github.com/agnaldoburgojr' target='blank'><FaGithub/></a>
          </Social>
        </TextContent>          
      </Content>
    </Container>
  );
};

export default Main;
