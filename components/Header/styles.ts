import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #DD3B30;
  position:relative;
  svg {
        margin: 0.5rem;
        position: absolute;
        right: 3.3rem;
        border: none;
        background-color: inherit;
        outline: none;
      }
  p {
    position: absolute;
    right: 1rem;
    border: 1px solid black;
    font-size: 2.5rem;
  }

`
