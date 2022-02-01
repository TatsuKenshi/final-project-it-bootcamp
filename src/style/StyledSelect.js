import styled from "styled-components";

const StyledSelect = styled.div`
  text-align: center;
  margin: 20px;
  color: rgb(60, 60, 60);

  .title {
    opacity: 1;
    position: relative;
    padding: 20px;
    text-align: center;
  }

  .browseGames,
  .browseMerch {
    display: flex;
    justify-content: center;
    margin: 20px auto;
    width: max-content;
  }

  .selectMenu,
  .inputSearch {
    margin-left: 50px;
    margin-right: 50px;
    color: rgb(60, 60, 60);
  }

  select {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
  }

  input {
    width: 350px;
    height: 30px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
  }

  @media (max-width: 1024px) {
    .browseGames,
    .browseMerch {
      display: block;
    }

    .selectMenu,
    .inputSearch {
      margin-left: 0px;
      margin-right: 0px;
      color: rgb(60, 60, 60);
    }

    select {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    .browseGames,
    .browseMerch {
      width: 80%;
      margin: auto;
    }

    select,
    input {
      width: 80%;
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .browseGames,
    .browseMerch {
      width: 95%;
    }

    select,
    input {
      width: 95%;
    }
  }
`;

export default StyledSelect;
