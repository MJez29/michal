
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';


const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  transition: transform 0.2s ease;

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
`


const Link = styled.a`
  color: black;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  &:hover ${Icon}, &:focus ${Icon} {
    transform: scale(1.4);

    ::after {
      left: 0;
      right: 0;
    }
  }
`;