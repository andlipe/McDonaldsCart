import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  position:sticky;
  top:0;
  z-index: 1;
  img{
    cursor: pointer;
  }
  

`
