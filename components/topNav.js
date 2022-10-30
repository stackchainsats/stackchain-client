import styled from "styled-components";
import Link from "next/link";
import MobileMenuIcon from "./icons/mobileMenuIcon";

const TopNavWrapper = styled.div`
  width: calc(100% - 260px);
  height: 72px;
  padding: 12px 24px;
  border-bottom: 1px solid rgb(240, 240, 240);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #fff;

  #menu-toggle {
    display: none;
    background: none;
    border: none;
    height: 40px;
    width: 40px;
    font-size: 26px;
    color: rgb(33, 43, 54);
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s all;
  }

  #menu-toggle:hover {
    background: rgba(99, 115, 129, 0.08);
  }

  @media (max-width: 1000px) {
    width: 100%;

    #menu-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const TopNav = ({ setMenuOpen, menuOpen }) => {
  return (
    <TopNavWrapper>
      <div>
        <button id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <MobileMenuIcon />
        </button>
      </div>
      <Link href="/login">Login</Link>
    </TopNavWrapper>
  );
};

export default TopNav;
