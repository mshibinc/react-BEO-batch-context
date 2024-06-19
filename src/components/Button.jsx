import React from 'react'
import styled from 'styled-components';

export default function Button({ type,name, ...rest }) {
    let colors = {
        info: {
            bgColor: '#2f28abaa',
            color: '#FFF',
            border: '#000'
        },
        success: {
            bgColor: '#42ab28aa',
            color: '#1f251a',
            border: '#1f251a'
        }
    }


    return (
        <ButtonWrapper bgColor={colors[type].bgColor} border={colors[type].border} color={colors[type].color} {...rest}>{name}</ButtonWrapper>
    )
}
const ButtonWrapper = styled.button`
   box-sizing: border-box;
  font-family: inherit;
  padding: 5px;
  border-radius: 8px;
  box-shadow: shadow(low);
  border: 1px solid ${(p) => p.border};;
  background-color: ${(p) => p.bgColor};
  color:  ${(p) => p.color};
  font-size: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  `