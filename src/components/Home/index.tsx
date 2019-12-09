import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Icon } from "../Icon";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

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

const animation = css`
  animation: ${Animation} 0.5s;
  animation-fill-mode: both;
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  font-family: "Noto Serif SC", serif;
  text-align: center;
  margin-top: 40vh;
  animation: ${Animation} 1s;
  margin-bottom: 20px;
  font-size: 2em;
`;

// const Button = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   transition: transform 0.4s ease;
//   position: relative;
//   outline: none;
//   font-family: "Noto Sans SC", sans-serif;

//   ::after {
//     content: "";
//     margin: 0 auto;
//     height: 2px;
//     position: absolute;
//     bottom: -5px;
//     left: 50%;
//     right: 50%;
//     transition: left 0.2s ease, right 0.2s ease;
//     background-color: black;
//   }

//   &:focus,
//   &:hover {
//     ::after {
//       left: 0;
//       right: 0;
//     }
//   }
// `;

const GithubIcon = styled(Icon).attrs({
  to: "https://github.com/MJez29",
  newTab: true,
  icon: faGithub
})`
  ${animation};
  animation-delay: 1.1s;
`;

const LinkedinIcon = styled(Icon).attrs({
  to: "https://linkedin.com/in/michal-jez",
  newTab: true,
  icon: faLinkedinIn
})`
  ${animation};
  animation-delay: 1.2s;
`;

const EmailIcon = styled(Icon).attrs({
  to: "mailto:michal.g.jez@gmail.com",
  newTab: true,
  icon: faEnvelope
})`
  ${animation};
  animation-delay: 1.3s;
`;

const ResumeIcon = styled(Icon).attrs({
  to: "#",
  newTab: true,
  icon: faFile
})`
  ${animation};
  animation-delay: 1.4s;
`;

const Home = () => {
  return (
    <Container>
      <Header>Hey, I'm Michal</Header>
      <div>
        <GithubIcon />
        <LinkedinIcon />
        <EmailIcon />
        <ResumeIcon />
      </div>
      {/* <Button>Here's my story</Button> */}
    </Container>
  );
};

export default Home;
