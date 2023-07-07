import { useState } from "react";
import styled from "styled-components";
const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <NavContainer>
            <Logo><img src="/src/assets/jobsnProfiles.f33d93c90b2431689a89.webp" alt="" /></Logo>
            <LinksContainer>
                <NavList className={isNavOpen ? "open" : ""}>
                    <NavItem>Link 1</NavItem>
                    <NavItem>Link 2</NavItem>
                    <NavItem>Link 3</NavItem>
                    <NavItem>Link 4</NavItem>
                    <NavItem>Link 5</NavItem>
                    <NavItem>Link 6</NavItem>
                </NavList>
                <Hamburger onClick={toggleNav}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </Hamburger>
            </LinksContainer>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  background-color: #406882;
`;

const Logo = styled.div`
  @media (max-width: 900px) {
    img{
        width: 200px;
    }
  }
`;


const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  column-gap: 2rem;
  @media (max-width: 810px) {
    display: ${({ className }) => className === "open" ? "flex" : "none"};
    }
  @media (max-width: 840px) {
    column-gap: 1rem;
    }
`;
const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    .open{
        background-color: #406882;
        padding: 0 2rem 2rem 2rem;
        position: absolute;
        top: 6rem;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }
`;

const NavItem = styled.li`
  margin-left: 1rem;
  font-size: large;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 810px) {
    display: flex;
  }

  .hamburger-line {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin-bottom: 5px;
  }
`;
export default Nav;
