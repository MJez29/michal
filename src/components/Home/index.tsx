import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(90px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  font-family: 'Noto Serif SC', serif;
  text-align: center;
  margin-top: 40vh;
  animation: ${Animation} 1s;
  margin-bottom: 20px;
  font-size: 2em;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.4s ease;
  position: relative;
  outline: none;
  font-family: 'Noto Sans SC', sans-serif;

  ::after {
    content: "";
    margin: 0 auto;
    height: 2px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    right: 50%;
    transition: left 0.2s ease, right 0.2s ease;
    background-color: black;
  }

  &:focus, &:hover {
    ::after {
      left: 0;
      right: 0;
    }
  }
`;


const Home = () => {
  return (
    <Container>
      <Header>Hey, I'm Michal</Header>
      <div>
        <Link href="https://linkedin.com/in/michal-jez" target="_blank">
        <Icon icon={faLinkedinIn} />
        </Link>

        <Link href="https://github.com/MJez29" target="_blank"><Icon icon={faGithub} /></Link>
        <Link href="mailto:michal.g.jez@gmail.com"><Icon icon={faEnvelope} /></Link>
        <Link href="/"><Icon icon={faFile} /></Link>
      </div>
      {/* <Button>Here's my story</Button> */}
    </Container>
  )
}

export default Home;
