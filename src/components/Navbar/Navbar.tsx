import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import Container from '../Utils/Container';
import Nav from '../Utils/Nav';
import basket from '/basket.png';

function Navbar() {
  const { cartItems } = useStore();

  const number = cartItems.length;

  return (
    <Container>
      <Nav>
        <Link to="/">
          <h2>WeMovies</h2>
        </Link>
        <Link to="/cart">
          <div className="cartMenu">
            <div>
              <p>Meu Carrinho</p>
              <span>
                {number} {number === 1 ? 'item' : 'itens'}
              </span>
            </div>
            <img src={basket} alt="" />
          </div>
        </Link>
      </Nav>
    </Container>
  );
}

export default Navbar;
