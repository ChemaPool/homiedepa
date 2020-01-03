import React from 'react';
import Styled from "styled-components";
import CheckType from './CheckType'

const Container = Styled.div`
  height: 350px;
  width: 350px;
  margin: 10px;
  padding: 50px;
  border: solid 1px #8D7AFF;
`;

const Title = Styled.div`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 30px;
`;

const OptionsContainer = () => {
    return (
      <div className="Container">
        <Container>
          <Title>Tipo de propiedad</Title>
            <CheckType text="Departamento"></CheckType>
            <CheckType text="Estudio"></CheckType>
            <CheckType text="Loft"></CheckType>
            <CheckType text="Casa"></CheckType>
            <CheckType text="Duplex"></CheckType>
        </Container>
      </div>
  );
}

export default OptionsContainer;