import styled from "styled-components";

const StyledCart = styled.div`
  margin: 20px;
  color: rgb(60, 60, 60);
  margin-left: auto;
  margin-right: auto;

  h1,
  h2,
  h3,
  .checkoutBtn {
    text-align: center;
  }

  .items {
    min-height: 75vh;
  }

  span {
    margin-right: 10px;
  }

  button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  .checkout {
    text-align: center;
    align-items: center;
    padding: 20px;
    color: rgb(60, 60, 60);
    font-weight: 900;
    max-width: 920px;
    margin: 30px auto;
    border: 1px solid cyan;
    background: rgba(0, 255, 255, 0.2);
    border-radius: 40px;
  }

  .checkoutForm {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
  }

  .checkoutForm input {
    width: 360px;
    height: 30px;
    margin: 5px 0 30px 20px;
    font-size: 1rem;
    font-weight: 900;
  }

  .subBtn {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 20px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  @media (max-width: 1024px) {
    .checkout {
      width: max-content;
      margin-left: auto;
      margin-right: auto;
    }

    .checkoutForm {
      display: block;
    }

    .checkoutForm input {
      margin: 5px auto 30px auto;
    }
  }

  @media (max-width: 768px) {
    .checkoutBtn button {
      font-size: 1rem;
    }

    .checkout {
      width: 85vw;
    }

    .checkoutForm {
      width: 100%;
    }

    .checkoutForm input {
      width: 100%;
      margin: 5px auto 30px auto;
    }

    .subBtn {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .checkoutBtn button {
      width: 95%;
    }

    .sub {
      width: 100%;
    }

    .subBtn {
      width: 100%;
    }
  }
`;

export default StyledCart;
