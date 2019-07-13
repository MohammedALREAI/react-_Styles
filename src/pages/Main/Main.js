import React, { Component } from "react";
import "../../styles/global.scss";
import { Header, Wrapper, ProductsContainer, Container } from "./styles";
import Product from "../../components/Product/Product";

class Main extends Component {
  render() {
    return (
      <div>
        <Header>
          <div>
            <div className="header-title">
              <h2>Uma seleção de produtos</h2>
              <h1>Especial para você</h1>
            </div>
            <p className="header-subtitle">
              Todos os produtos desta lista foram selecionados a partir da sua
              navegação. Aproveite!
            </p>

            <nav className="nav-buttons">
              <a href="#">Conheça a Linx</a>
              <a href="#">Ajude o algorismo</a>
              <a href="#">Seus produtos</a>
              <a href="#">Compartilhe</a>
            </nav>
          </div>
        </Header>

        <Wrapper>
          <h1 className="section__title">Sua seleção especial</h1>
          <ProductsContainer>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ProductsContainer>
        </Wrapper>
      </div>
    );
  }
}

export default Main;
