import styled from "styled-components";

const StyledMerch = styled.div`
  .selectedMerch {
    min-height: 75vh;
  }

  .goToCart {
    text-align: end;
  }

  .goToCart button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-right: 40px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  @media (max-width: 768px) {
    .goToCart button {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .goToCart {
      width: 95vw;
      margin: 10px auto;
    }

    .goToCart button {
      width: 100%;
    }
  }
`;

export default StyledMerch;
