import styled from "styled-components";

const StyledNav = styled.div`
  .nav {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    color: indianred;
    text-align: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 900;
    background: rgba(0, 255, 255, 0.2);
  }

  a {
    text-decoration: none;
    color: indianred;
    font-weight: 900;
  }

  .link:hover {
    text-decoration: underline;
  }

  .logOutBtn {
    text-decoration: none;
    color: black;
    font-weight: 900;
    border: none;
    background: none;
    font-size: 1.1rem;
  }

  .logOutBtn:hover {
    text-decoration: underline;
  }

  .burger {
    display: none;
  }

  .stripe {
    width: 40px;
    height: 7px;
    background: indianred;
  }

  .small-menu {
    background: pink;
    text-align: center;
    display: none;
    background: rgba(0, 255, 255, 0.2);
  }

  .link-small {
    height: 25px;
  }

  @media (max-width: 768px) {
    .link {
      display: none;
    }

    .burger {
      width: 40px;
      height: 30px;
      margin-left: auto;
      margin-right: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .small-menu {
      display: block;
    }
  } ;
`;

export default StyledNav;
