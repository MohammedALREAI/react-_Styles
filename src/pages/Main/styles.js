import styled from "styled-components";

export const Header = styled.header`
  background-color: #707070;
  width: 100vw;
  padding: 6.9rem 31.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  div.header-title {
    display: flex;
    flex-direction: column;
    text-transform: lowercase;
    text-align: center;
    margin-bottom: 1.2rem;

    h2 {
      margin-bottom: 0.5rem;
      font-size: 1.9rem;
      font-weight: 200;
    }

    h1 {
      font-size: 3.2rem;
      font-weight: bold;
      letter-spacing: 0.5px;
      display: inline-block;
    }
  }

  .header-subtitle {
    font-size: 1.6rem;
    text-align: center;
  }

  nav.nav-buttons {
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    a {
      text-decoration: none;
      color: #888888;
      background: #ffffff;
      border: 1px solid #707070;
      padding: 1.2rem 2.5rem;

      margin-left: 2.5rem;
      border-radius: 4px;
      font-size: 1.6rem;
      transition: all 0.5s;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      &:hover {
        transform: translateY(-4px);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media screen and (max-width: 400px) {
  }
`;

export const Wrapper = styled.section`
background: red;
min-width: 100vw;
  max-width: 100vw;
  padding: 6.9rem 6.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section__title {
    color: white;
    min-width: 20rem;
    display: inline-block;

    text-align: center;
    font-size: 1.8rem;
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;`;


  

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
