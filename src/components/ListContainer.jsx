import React from 'react';
import Styled from "styled-components";

const Label = Styled.p`
  margin: 0px 5px;
  padding: 15px 10px;
  color: ${props => props.color ? props.color : 'gray'};
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  &:hover{
    cursor: pointer;
  }
`;

const ListContainer = () => {

  return (
    <div className="Container">
      <Label color="#8D7AFF" >Identidad</Label>
      <Label color="#8D7AFF" >Propietario</Label>
      <Label color="#8D7AFF" fontSize="20px" fontWeight="bold" >Características básicas</Label>
      <Label >Espacios</Label>
      <Label >Fotos y anuncio</Label>
      <Label >Precio</Label>
      <Label >Disponibilidad</Label>
    </div>
  );
}

export default ListContainer;