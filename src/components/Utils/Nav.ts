import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  color: #fff;

  .cartMenu {
    display: flex;
    align-items: center;
    text-align: right;
    gap: 8px;

    p {
      font-weight: 600;
      font-size: 14px;
    }

    span {
      color: #999;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export default Nav;
