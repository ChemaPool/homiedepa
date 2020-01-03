import React from 'react';
import Styled from "styled-components";

const CheckType = (props) => {
  const Text = Styled.label`
  `;

  const OptionType = Styled.div`
    width: auto;
    color: black;
    margin: 10px 0px;
    font-weight: normal;
    padding: 15px 20px;
    background-color: '#fff';
    border: solid 1px #e2e2e2;
    &:hover {
      cursor: pointer;
      background-color: #8D7AFF;
    }
  `;

  const Radio = Styled.input`
    visibility:hidden;
    position: absolute;
    &:hover{
      cursor: pointer;
      background-color: #8D7AFF;
    }
    &:checked + ${OptionType}{
      color: white;
      cursor: pointer;
      font-weight: bold;
      background-color: #8D7AFF;
    }
  `;

  return (
    <Text>
      <Radio name="checkType" type="radio"></Radio>
      <OptionType>{props.text}</OptionType>
    </Text>
  )
}

export default CheckType;