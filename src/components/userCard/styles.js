import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  margin-top: 5px;
  justify-content: center;
  border-radius: 5px;

  section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 100%;
    padding: 20px 10px;

    h1 {
      padding-bottom: 5px;
      color: var(--orange);
    }

    div {
      width: 90%;
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .div-flex-center{
      align-items: center;
    }

    h4{
      color: var(--orange);
      border-bottom: 1px solid var(--orange);
      padding-bottom: 16px;
      span{
        color: var(--vanilla);
      }
    }

    article{
      font-size: 0.8rem;
      border-left: 1px dashed var(--orange);
      padding-left: 10px;
    }

    label{
      align-self: center;
      font-size: 0.8rem;
      font-weight: 500;
      margin-top: 5px;
    }

    .div-flex{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      p{
        color: var(--orange);
      }
    }

    .div-informations{
      display: flex;
      align-items: center;
      margin-top: 10px;
      width: 80%;
      p {
        font-size: 0.7rem;
        color: var(--orange);
        margin-bottom: 10px;
        font-weight: 500;
        display: flex;
        align-items: center;
        
        svg{
          margin-right: 5px;
        }

        span {
          color: var(--vanilla);
          margin-left: 5px;
        }

      }
    }

  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    align-self: center;
    border: solid 1px var(--orange);
    background-color: black;
    object-fit: cover;
    margin-bottom: 16px;
  }

  @media (min-width: 900px) {

    width: 300px;

    section {
      .div-flex-center{
        margin: 0 auto;
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 10px;
      }
    }

    div {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 5px;
      margin-bottom: 16px;
      object-fit: cover;
    }

    p + p {
      margin-bottom: 20px;
    }
  }
`;
