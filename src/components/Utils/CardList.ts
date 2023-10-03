import styled from "styled-components";

const CardList = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default CardList