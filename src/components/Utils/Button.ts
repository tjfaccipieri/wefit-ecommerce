import styled from "styled-components";

interface ButtonProps {
  width?: number
}

const Button = styled.button<ButtonProps>`
  display: flex;
  border: none;
  background-color: #009EDD;
  height: 40px;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  border-radius: 4px;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #039B00;
  }

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  p {
    font-weight: 700;
    text-transform: uppercase;
  }
`

export default Button