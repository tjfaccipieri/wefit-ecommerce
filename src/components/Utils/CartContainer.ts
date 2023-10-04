import { styled } from 'styled-components';
import EmptyCartContainer from './EmptyCartContainer';

export const CartContainer = styled(EmptyCartContainer)`
  padding: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 95%;
    min-height: 87vh;
  }

  .cartMenu {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 52px;
    grid-row-gap: 0px;
    color: #999999;

    .productName { grid-area: 1 / 1 / 2 / 4; }

    .productQtd { grid-area: 1 / 4 / 2 / 5; }
    .productSubtotal { grid-area: 1 / 5 / 2 / 8; }
  


    @media (max-width: 768px) {
      display: none;
    }
  }

  .uniqueItemContainer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 52px;
    grid-row-gap: 0px;
    width: 100%;
    align-items: center;
    margin-bottom: auto;

    .itemImageContainer {
      grid-area: 1 / 1 / 2 / 2;

      img {
        height: 114px;
        width: auto;
      }
    }
    .itemTitleContainer {
      grid-area: 1 / 2 / 2 / 4;
    }
    .itemQuantityContainer {
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
    .itemSubtotalContainer {
      grid-area: 1 / 5 / 2 / 7;

      .priceText {
        display: none;
      }
    }
    .itemRemoveContainer {
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
      .itemImageContainer {
        grid-area: 1 / 1 / 3 / 2;

        img {
          height: 82px;
        }
      }
      .itemTitleContainer {
        grid-area: 1 / 2 / 2 / 7;
        display: flex;
        justify-content: space-between;
      }
      .itemQuantityContainer {
        grid-area: 2 / 2 / 3 / 5;
      }
      .itemSubtotalContainer {
        grid-area: 2 / 5 / 3 / 8;
        margin-left: auto;
        .priceText {
          display: block;
          color: #999999;
        }
      }
      .itemRemoveContainer {
        grid-area: 1 / 7 / 2 / 8;
      }
    }
  }

  .total {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-transform: uppercase;

    button {
      width: 230px;
    }

    .valor {
      color: #999999;
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
`;
