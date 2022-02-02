import styled from "styled-components";

const StyledProductForm = styled.div`
  padding: 20px;
  color: rgb(60, 60, 60);
  font-weight: 900;
  max-width: 920px;
  margin: 30px auto;
  border: 1px solid cyan;
  background: rgba(0, 255, 255, 0.2);
  border-radius: 40px;
  text-align: center;

  input {
    width: 360px;
    height: 30px;
    margin: 5px 0 5px 20px;
    font-size: 1rem;
  }

  label {
    font-size: 1.25rem;
  }

  button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    button {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0 2vw;

    input {
      width: 90%;
      margin: 5px auto;
    }

    button {
      font-size: 1rem;
      width: 90%;
    }
  }
`;

export default StyledProductForm;
