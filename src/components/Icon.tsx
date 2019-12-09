import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const IconSvg = styled(FontAwesomeIcon)`
  font-size: 24px;
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

  &:hover,
  &:focus {
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
  className?: string;
}

export const Icon: React.FC<Props> = ({ to, newTab, icon, className }) => (
  <Link href={to} target={newTab ? "_blank" : undefined}>
    <IconSvg icon={icon} className={className} />
  </Link>
);
