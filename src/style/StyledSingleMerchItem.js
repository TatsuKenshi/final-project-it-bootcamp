import styled from "styled-components";

const StyledSingleMerchItem = styled.div`
  color: rgb(60, 60, 60);
  margin: 20px auto 50px auto;
  width: 960px;
  height: max-content;

  .mainTitle {
    display: flex;
    justify-content: space-between;
  }

  .titleDiv {
    font-size: 20px;
    font-weight: 900;
    padding-top: 25px;
  }

  .loginToShop {
    text-align: center;
    margin-bottom: 10px;
  }

  .loginToShop button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  .addToCart {
    text-align: center;
    margin-bottom: 10px;
  }

  .addToCart button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  .imgDiv {
    margin-top: 10px;
  }

  .img {
    width: 100%;
    height: 500px;
    background: rgb(60, 60, 60);
    text-align: center;
  }

  .img h3 {
    padding-top: 200px;
    color: indianred;
    font-size: 30px;
  }

  .text {
    margin-top: 10px;
  }

  .mainText {
    margin-top: 10px;
  }

  .mainText p {
    margin-bottom: 10px;
  }

  .goToCart {
    text-align: right;
    margin-bottom: 10px;
  }

  .goToCart button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  @media (max-width: 1024px) {
    width: 95%;

    .img {
      height: 50vh;
    }
  }

  @media (max-width: 768px) {
    .loginToShop button,
    .addToCart button,
    .goToCart button {
      font-size: 1rem;
    }

    .img h3 {
      padding-top: 200px;
      color: indianred;
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    .mainTitle {
      flex-direction: column-reverse;
    }

    .loginToShop button,
    .addToCart button,
    .goToCart button {
      width: 100%;
    }
  }
`;

export default StyledSingleMerchItem;
