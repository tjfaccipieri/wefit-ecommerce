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

  div {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    justify-content: center;

    img {
      height: 114px;
      width: auto;
    }

    .title {
      width: 100%;
    }

    .quantity {
      display: flex;
      height: fit-content;
      justify-content: center;
      gap: 4px;

      span {
        border: 1px solid #D9D9D9;
        width: 62px;
        text-align: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
      }

      img {
        height: 100%;
      }
    }

    .trash {
      height: 100%;
      cursor: pointer;
    }
  }
  `

export default EmptyCartContainer