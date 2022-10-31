import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SideMenu = ({ menuOpen }) => {
  const router = useRouter();

  const menuList = [
    {
      url: "/",
      icon: <MenuSVG />,
      label: "Dashboard",
    },
    {
      url: "/blocks",
      icon: <MenuSVG />,
      label: "Blocks",
    },
    {
      url: "/stackjoin",
      icon: <MenuSVG />,
      label: "Stackjoin",
    },
    {
      url: "/memepool",
      icon: <MenuSVG />,
      label: "Memepool",
    },
    {
      url: "/statistics",
      icon: <MenuSVG />,
      label: "Statistics",
    },
  ];

  return (
    <MenuWrapper
      menuOpen={menuOpen}
      className={menuOpen ? "slide-menu-in" : ""}
    >
      <div className="logo-link">
        <Link href="/">
          <div className="menu-logo">
            <Image src={"/logo.png"} width={60} height={60} />
            <span className="menu-logo-text">Stackchain</span>
          </div>
        </Link>
      </div>

      <div>
        <h6 className="menu-header">General</h6>
      </div>
      <div className="menu-options">
        {menuList.map((item) => {
          return (
            <div
              key={item.url}
              className={
                router.pathname == item.url
                  ? "menu-option active"
                  : "menu-option"
              }
            >
              <Link href={item.url}>
                <div className="menu-option-contents">
                  <div className="menu-svg">{item.icon}</div>
                  <span>{item.label}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>{``}</style>
    </MenuWrapper>
  );
};

const MenuSVG = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="dashboard"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 01140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 00-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 000 79.2 55.95 55.95 0 0079.2 0 55.87 55.87 0 0014.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 00-11.3 0l-56.6 56.6a8.03 8.03 0 000 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 00-11.3 0l-31.1 31.1a8.03 8.03 0 000 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"></path>
    </svg>
  );
};

const MenuWrapper = styled.div`
  width: 260px;
  height: 100vh;
  background: #fff;
  position: fixed;
  border-right: 1px solid rgb(240, 240, 240);
  z-index: 1000;

  .logo-link {
    cursor: pointer;
  }

  .menu-logo {
    padding: 20px;
    display: flex;
    align-items: center;
    & img {
      margin-right: 8px;
    }
    &-text {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .menu-header {
    margin: 0 0 12px 24px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.66;
    font-family: "Public Sans", sans-serif;
    color: #262626;
  }

  .menu-option {
    margin: 8px;
    border-radius: 8px;
  }

  .menu-option-contents {
    border-radius: 8px;
    height: 48px;
    display: block;
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 8px 0;
    display: flex;
    align-items: center;
    color: rgb(99, 115, 129);
  }

  .menu-svg {
    width: 56px;
    display: flex;
    justify-content: center;
  }

  .menu-options .menu-option-contents:hover {
    background-color: rgba(145, 158, 171, 0.08);
    color: #262626;
  }

  .active {
    background-color: rgba(145, 158, 171, 0.08);
  }
  .active .menu-option-contents {
    color: #262626;
  }

  @media (max-width: 1000px) {
    transform: ${({ menuOpen }) =>
      menuOpen ? "translateX(0px)" : "translateX(-260px)"};
    transition: 0.3s all;
  }

  .slide-menu-in {
    animation: 0.3s slideMenuIn both;
  }

  @keyframes slideMenuIn {
    0% {
      transform: translateX(-260px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export default SideMenu;
