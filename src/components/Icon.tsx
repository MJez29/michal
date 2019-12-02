import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const IconSvg = styled(FontAwesomeIcon)`
  font-size: 24px;
  transition: transform 0.2s ease;
`;


const Link = styled.a`
  color: black;
  margin-right: 15px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

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

  &:hover, &:focus {
    ::after {
      left: 0;
      right: 0;
    }
  }
`;

interface Props {
  to: string;
  newTab?: boolean;
  icon: IconProp;
}

export const Icon: React.FC<Props> = ({ to, newTab, icon }) => (
  <Link href={to} target={newTab ? '_blank' : undefined}>
    <IconSvg icon={icon} />
  </Link>
);

export const GithubIcon = () => <Icon to="https://github.com/MJez29" newTab icon={faGithub} />;

export const LinkedinIcon = () => <Icon to="https://linkedin.com/in/michal-jez" newTab icon={faLinkedinIn} />;

export const EmailIcon = () => <Icon to="mailto:michal.g.jez@gmail.com" icon={faEnvelope} />;

export const ResumeIcon = () => <Icon to="/" newTab icon={faFile} />;