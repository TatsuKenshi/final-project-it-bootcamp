import styled from "styled-components";

const StyledSingleNews = styled.div`
  color: rgb(60, 60, 60);
  margin: 20px auto 50px auto;
  width: 960px;
  height: max-content;

  .titleDiv h2 {
    font-size: 30px;
    font-weight: 900;
  }

  .imgDiv {
    margin-top: 10px;
  }

  .img {
    width: 100%;
    height: 500px;
  }

  .mainText {
    margin-top: 10px;
  }

  .mainText p {
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    width: 95%;

    .img {
      height: auto;
    }
  }

  @media (max-width: 768px) {
    * {
      max-width: 100%;
    }
  }
`;

export default StyledSingleNews;
