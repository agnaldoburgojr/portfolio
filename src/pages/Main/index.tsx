import React, { useState, useCallback, useEffect } from 'react';
import { Container, Content, Title, Image } from './styles'
import photo from '../../assets/photo1.png'
import brush from '../../assets/brush2.png'

const Main: React.FC = () => {
  const [word, setWord] = useState('')

  const addWord = useCallback((chars: string[]) => {
    chars.map((char, index) => setTimeout(() => {
        setWord(prevState => prevState + char)
      }, [1000 + 200 + index * 200])
    )
  }, [])

  useEffect(()=> {
    addWord(['I', 'n', 'd', 'i', 'e', ' ', 'C', 'a', 'm', 'p', 'e', 'r', 's', ' ', ':', ')'])
  }, [])

  return (
    <Container>
      <Content>
        <Title>
          <h2>hello, <span>{word}</span></h2>
          <div/>
        </Title>
        
        <h1>eu sou Agnaldo Burgo Junior,</h1>
        <p>engenheiro e desenvolvedor de software. Este é meu portfólio especial para vocês!</p>
        <button type='button'>Porque quero fazer parte</button>
      </Content>
      <Image>
        <img src={brush} alt="brush"/>
        <img src={photo} alt="photo"/>
      </Image>
    </Container>
  );
};

export default Main;
