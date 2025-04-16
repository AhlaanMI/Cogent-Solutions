import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import logo from "../../images/cogent-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", cursor: "pointer" }}
          />
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#event">Event Overview</NavLink>
          <NavLink href="#projects">Our Speakers</NavLink>
          <NavLink href="#education">Agenda</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="#contact">Register Now</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#event"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Event Overview
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Agenda
            </MobileLink>
            <MobileLink
              href="#event"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Event Overview
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
