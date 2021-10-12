import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 40px;
  z-index: 10;
  transform: translateY(${({ show }) => (show ? 0 : "-100%")});
  transition: transform 0.3s ease-in-out;
`;

const Nav = styled.div`
  position: relative;
  background-color: #00000095;
  padding: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  z-index: 10;
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  padding: 0 1rem;
`;

const ToggleWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  vertical-align: start;
`;

const ToggleTheme = styled.button`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5rem;
  padding: 0.25rem 0.2rem;
  border: none;
  box-shadow: 0 0 5px
    ${({ theme }) => (theme.name === "light" ? "#ffc300" : "#ffffff")};
  align-items: center;
  border-radius: 9999px;
  background-color: transparent;
  overflow: hidden;
  transition: box-shadow 0.5s linear;
  :focus {
    outline: none;
  }
`;

const Light = styled.div`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => (theme.name === "light" ? "#ffc300" : "transparent")};
  background-color: ${({ theme }) =>
    theme.name === "light" ? "transprent" : "#ffc300"};
  padding: 0.35rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  cursor: ${({ theme }) => (theme.name === "light" ? "default" : "pointer")};
  transition: all 0.3s linear;
`;

const Dark = styled.div`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => (theme.name === "dark" ? "#ffffff" : "transparent")};
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "transprent" : "#ffffff"};
  padding: 0.35rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  cursor: ${({ theme }) => (theme.name === "dark" ? "default" : "pointer")};
  transition: all 0.3s linear;
`;

const ToggleDropdown = styled.button`
  position: relative;
  color: white;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    & > span:nth-child(2) {
      width: 1.5rem;
    }
    & > span:nth-child(3) {
      width: 1rem;
    }
  }
  :focus {
    outline: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const ToggleItem1 = styled.span`
  width: 2rem;
  height: 2px;
  background-color: white;
  margin: 0.15rem 0 0.15rem auto;
  transition: width 0.3s ease;
`;

const ToggleItem2 = styled.span`
  width: 1.25rem;
  height: 2px;
  background-color: white;
  margin: 0.15rem 0 0.15rem auto;
  transition: width 0.3s ease;
`;

const ToggleItem3 = styled.span`
  width: 1.75rem;
  height: 2px;
  background-color: white;
  margin: 0.15rem 0 0.15rem auto;
  transition: width 0.3s ease;
`;

const NavMenu = styled.ul`
  display: none;
  list-style: none;
  font-family: Montserrat;
  padding: 0 1rem;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    column-gap: 1rem;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    column-gap: 2rem;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0;
  font: 1rem Montserrat;
  background-color: #00000095;
  transform: translateY(${({ show }) => (show ? 0 : "-130%")});
  list-style: none;
  backdrop-filter: blur(5px);
  transition: transform 0.7s ease, background-color 0.3s ease-in-out;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  padding: 0.75rem 1rem;
  :hover {
    backdrop-filter: brightness(1);
    a {
      opacity: 1;
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 0 1rem;
    :hover {
      background-color: transparent;
    }
  }
`;

const MenuLink = styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s ease;
`;

const Navbar = ({ theme }) => {
  const [scrollpos, setScrollpos] = useState(window.scrollY);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setShowDropdown((state) => !state);
  };

  const handleClickMenu = () => {
    setShowDropdown(false);
  };

  const handleShowNavbar = () => {
    const currentScrollpos = window.scrollY;
    const show = scrollpos > currentScrollpos;

    setScrollpos(currentScrollpos);
    setShowNavbar(show);
    // only hide dropdown
    if (show === false) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowNavbar);
    return () => {
      window.removeEventListener("scroll", handleShowNavbar);
    };
  }, [scrollpos]);

  return (
    <>
      <Header show={showNavbar}>
        <Nav ref={navbarRef}>
          <Title>ADITRIZKI</Title>
          <ToggleWrapper>
            <ToggleTheme>
              <Light onClick={() => theme("light")}>
                <FontAwesomeIcon icon={faSun} />
              </Light>
              <Dark onClick={() => theme("dark")}>
                <FontAwesomeIcon icon={faMoon} />
              </Dark>
            </ToggleTheme>
            <ToggleDropdown onClick={handleToggle}>
              <ToggleItem1 />
              <ToggleItem2 />
              <ToggleItem3 />
            </ToggleDropdown>
            <NavMenu>
              <MenuItem>
                <MenuLink href="#" onClick={handleClickMenu}>
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#about" onClick={handleClickMenu}>
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#skill" onClick={handleClickMenu}>
                  Skill
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#project" onClick={handleClickMenu}>
                  Project
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#contact" onClick={handleClickMenu}>
                  Contact
                </MenuLink>
              </MenuItem>
            </NavMenu>
          </ToggleWrapper>
        </Nav>
        <DropdownMenu ref={dropdownRef} show={showDropdown}>
          <MenuItem>
            <MenuLink href="#" onClick={handleClickMenu}>
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#about" onClick={handleClickMenu}>
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#skill" onClick={handleClickMenu}>
              Skill
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#project" onClick={handleClickMenu}>
              Project
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#contact" onClick={handleClickMenu}>
              Contact
            </MenuLink>
          </MenuItem>
        </DropdownMenu>
      </Header>
    </>
  );
};

export default Navbar;
