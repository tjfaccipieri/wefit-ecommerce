import styled from "styled-components";

const EmptyCartContainer = styled.main`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 64px 0;
  height: 100%;

  img {
    width: min(100%, 447px);
  }

  h2 {
    font-size: 20px;
    padding-inline: 64px;
    text-align: center;
  }
`


export const CartContainer = styled(EmptyCartContainer)`
  padding: 24px;
  `

export default EmptyCartContainer