import React from "react";
import { Container, Image, FigureContainer } from "./styles";

const Product = props => (
  <Container>
    <FigureContainer>
      <Image className="figure__image" />
    </FigureContainer>

    <div className="description-container">
      <p className="description-container__title">Nome do Produto</p>
      <p className="description-container__description">
        Descrição do produto um pouco maior, com duas linhas ou três que explica
        melhor do que se trata.
      </p>
      <p className="description-container__price-1">De: R$23,99</p>
      <p className="description-container__price-2">
        <strong> Por: R$19,99</strong>
      </p>
      <p className="description-container__price-3">ou 2x de R$9,99</p>
    </div>

    <button className="product__button">Comprar</button>
  </Container>
);

export default Product;
