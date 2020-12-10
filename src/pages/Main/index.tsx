import React, { useState, useCallback, useEffect } from 'react';
import { Container, Content, Menu, Hero, Social, Nav, Link } from './styles'
import profile from '../../assets/photo3.jpg'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

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
        <Menu>
          <Nav>
            <Link to="/" isActive={index === 0} onClick={()=> handleClick(0)}>home</Link>
            <Link to="/about" isActive={index === 1} onClick={()=> handleClick(1)}>sobre mim</Link>
            <Link to="/goals" isActive={index === 5} onClick={()=> handleClick(5)}>objetivos como dev</Link>
            <Link to="/stack" isActive={index === 2} onClick={()=> handleClick(2)}>stack e interesses</Link>
            <Link to="/courses" isActive={index === 3} onClick={()=> handleClick(3)}>formação</Link>
            <Link to="/projects" isActive={index === 4} onClick={()=> handleClick(4)}>projetos</Link>
          </Nav>
        </Menu>
        <Hero>
          <div>
            <h2>hello, <span>{word}</span> <span>_</span></h2>
            <h1>eu sou Agnaldo Burgo Junior,</h1>
            <p>engenheiro e desenvolvedor de software e este é o meu portfólio, <br/> seja bem-vindo(a)!</p>
            <Social>
              <a href='https://www.linkedin.com/in/agnaldoburgojr/' target='blank'><AiFillLinkedin/></a>
              <a href='https://github.com/agnaldoburgojr' target='blank'><AiOutlineGithub/></a>
            </Social>


          </div>
          <div>
            <img src={profile} alt="profile"/>
          </div>

        </Hero>
        
      </Content>
      
    </Container>
  );
};

export default Main;
