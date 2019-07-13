import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 35rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 400px) {
    width: 35rem;
  }

  .product__button {
    border: none;
    background-color: #ffffff;
    border: 1px solid #707070;
    padding: 1rem 2rem;
    border-radius: 4px;
    color: #888888;
    font-size: 1.6rem;
    width: 74%;
    transition: all 0.5s;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
      transform: translateY(-4px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);
    }
  }

  .description-container {
    color: #888888;
    margin: 2rem 2rem;
    width: 70%;

    [class^="description-container"] {
      font-size: 1.8rem;
      color: #888888;
    }

    &__title,
    &__description {
      margin-bottom: 2rem;
    }

    [class^="description-container__price"] {
      margin-bottom: 1rem;
    }

    &__price-2 {
      font-size: 2rem;
    }

    &__title {
      font-size: 1.7rem;
    }

    @media screen and (max-width: 400px) {
      width: 60%;
      margin: 0;

      p.description-container__title {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Image = styled.div`
  min-width: 24rem;

  height: 19rem;
  border: 1px solid #707070;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 400px) {
    min-width: 17rem;
    height: 18rem;
  }
`;

export const FigureContainer = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  text-align: left;
`;
