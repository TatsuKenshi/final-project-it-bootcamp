import styled from "styled-components";

const StyledHome = styled.div`
  .banner {
    justify-content: center;
    max-width: 1908px;
  }

  .title {
    padding-top: 50px;
    text-align: center;
    color: rgb(60, 60, 60);
  }

  .title h1 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  .title h2 {
    font-size: 30px;
  }

  .featuredContent {
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    margin: 0 auto;
  }

  .featuredItem {
    width: 25%;
    opacity: 1;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 10px;
    display: block;
    border-radius: 40px;
    border: 1px solid cyan;
    background: rgba(0, 255, 255, 0.2);
    color: rgb(60, 60, 60);
    height: 650px;
    text-align: center;
  }

  .featItemTitle,
  .featItemImg {
    display: flex;
    flex-wrap: wrap;
    height: 30%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .featItemInfo {
    display: flex;
    flex-wrap: wrap;
    height: 25%;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
  }

  .featTitle {
    font-size: 1rem;
  }

  .featItemInfo h3 {
    font-size: 1rem;
  }

  .featImg {
    width: 100%;
  }

  .featBtn {
    font-size: 1.5rem;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    color: indianred;
    font-weight: 900;
    width: 95%;
  }

  .myFavorites {
    height: 1000px;
    overflow: scroll;
  }

  .myFavorites h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    color: rgb(60, 60, 60);
    max-width: 1908px;
  }

  @media (max-width: 1024px) {
    .featuredContent h3 {
      font-size: 1rem;
    }

    .featuredItem {
      width: 28%;
    }

    .featTitle {
      font-size: 1.1rem;
    }

    .featBtn {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .featuredContent {
        flex-wrap: wrap;
      }

      .featuredItem {
        width: 45%;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }

    @media (max-width: 500px) {
      .featuredContent {
        flex-wrap: wrap;
      }

      .featuredItem {
        width: 90%;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }
  }
`;

export default StyledHome;
