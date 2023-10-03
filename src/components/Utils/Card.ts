import styled from "styled-components";

const Card = styled.main`
  background-color: #fff;
  padding: 10px 11px;
  width: 95%;
  margin:0 auto;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  img {
    width: 50%;
  }

  h3 {
    font-size: 12px;
    font-weight: 700;
  }
  
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`

export default Card