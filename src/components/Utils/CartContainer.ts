import styled from 'styled-components';

const EmptyCartContainer = styled.main`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 64px 0;
  height: 100%;
  color: #2f2e41;

  img {
    width: min(100%, 447px);
  }

  h2 {
    font-size: 20px;
    padding-inline: 64px;
    text-align: center;
  }

  button {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const CartContainer = styled(EmptyCartContainer)`
  padding: 24px;
  /* width: 950px; */
  font-weight: 700;
  
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 95%;
    min-height: 87vh;
  }

  .cartMenu {
    display: flex;
    width: 100%;
    margin-left: 0;
    color: #999999;
    font-size: 14px;

    @media(max-width: 768px) {
      display: none;
    }
  }

  .itemList {
    /* display: flex; */
    /* align-items: center; */
    /* width: 902px; */
    /* gap: 52px; */

    img {
      /* height: 114px; */
      /* width: auto; */
    }

    .title {
      display: block;
      /* font-weight: 700; */
      width: 253px;
    }

    .quantity {
      display: flex;
      height: fit-content;
      justify-content: center;
      gap: 11px;
      width: fit-content;
      /* background-color: bisque; */
      align-items: center;

      span {
        border: 1px solid #999999;
        width: 62px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
      }

      img {
        height: 100%;
      }
    }

    .price {
      
      width: 213px;
      /* font-weight: 700; */
      /* background-color: aquamarine; */
    }

    .trash {
      height: 100%;
      cursor: pointer;
    }
  }
  .total {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-transform: uppercase;
    /* background-color: blue; */

    button {
      width: 230px;
    }

    .valor {
      color: #999999;
      /* font-weight: 700; */
      display: flex;
      align-items: center;
      gap: 32px;

      strong {
        font-size: 24px;
        color: #2f2e41;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: flex-end;
      justify-content: stretch;
      gap: 16px;

      a {
        width: 100%;

        button {
          width: 100%;
        }
      }
    }
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 52px;
    grid-row-gap: 0px;
    width: 100%;
    align-items: center;
    /* font-weight: 700; */
    margin-bottom: auto;


    .div1 {
      grid-area: 1 / 1 / 2 / 2;

      img {
        height: 114px;
        width: auto;
      }
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 4;
    }
    .div3 {
      grid-area: 1 / 4 / 2 / 5;
      display: flex;
      align-items: center;
      gap: 11px;
      height: fit-content;
      font-weight: 400;

      span {
        border: 1px solid #999999;
        width: 62px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
      }

      img {
        height: 100%;
        width: auto;
      }
    }
    .div4 {
      grid-area: 1 / 5 / 2 / 7;

      .priceText {
        display: none;
      }
    }
    .div5 {
      grid-area: 1 / 7 / 2 / 8;

      img {
        height: 100%;
        width: auto;
        margin-left: auto;
        display: block;
      }
    }

    @media (max-width: 768px) {
      align-items: start;
      gap: 8px;
      .div1 {
        grid-area: 1 / 1 / 3 / 2;

        img {
          height: 82px;
        }
      }
      .div2 {
        grid-area: 1 / 2 / 2 / 7;

        .title {
          display: flex;
          justify-content: space-between;
        }
      }
      .div3 {
        grid-area: 2 / 2 / 3 / 5;
      }
      .div4 {
        grid-area: 2 / 5 / 3 / 8;
        margin-left: auto;
        .priceText {
        display: block;
      }
      }
      .div5 {
        grid-area: 1 / 7 / 2 / 8;
      }
    }
  }
`;

export default EmptyCartContainer;
