import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../App';
import { useStore } from '../../context/StoreContext';
import Button from '../Utils/Button';
import { CartContainer } from '../Utils/CartContainer';
import Container from '../Utils/Container';
import EmptyCartContainer from '../Utils/EmptyCartContainer';
import emptyCart from '/emptyCart.png';
import minusIcon from '/minusIcon.png';
import plusIcon from '/plusIcon.png';
import trash from '/trash.png';

function Cart() {
  const { cartItems, decreaseQuant, increaseQuant, removeItem, checkout } =
    useStore();

  const [films, setFilms] = useState<Film[]>([]);

  const selectedItemsMap = {};
  cartItems.forEach((item) => {
    selectedItemsMap[item.id] = item.qtd;
  });

  const combinedList = films.map((item) => ({
    ...item,
    quantity: selectedItemsMap[item.id] || 0,
  }));

  const itemsToShow = combinedList.filter((item) => item.quantity !== 0);

  async function getData() {
    try {
      const response = await axios.get('http://localhost:3000/products');
      const data = response.data;
      setFilms(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  let total: number = 0;

  return (
    <Container>
      {cartItems.length === 0 ? (
        <EmptyCartContainer>
          <h2>Parece que não há nada por aqui :(</h2>
          <img src={emptyCart} alt="" />
          <Link to="/">
            <Button width={180}>
              <p>Voltar</p>
            </Button>
          </Link>
        </EmptyCartContainer>
      ) : (
        <>
          <CartContainer>
            <div className="cartMenu">
              <p>Produto</p>
              <p>Qtd</p>
              <p>Subtotal</p>
            </div>
            {itemsToShow.map((item) => (
              <>
                <div className="uniqueItemContainer">
                  <div className="itemImageContainer">
                    <img src={item.image} alt="" />{' '}
                  </div>
                  <div className="itemTitleContainer">
                    <p>{item.title}</p>
                    <p>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                  <div className="itemQuantityContainer">
                    <img
                      src={minusIcon}
                      alt=""
                      onClick={() => decreaseQuant(item.id)}
                    />
                    <span>{item.quantity}</span>
                    <img
                      src={plusIcon}
                      alt=""
                      onClick={() => increaseQuant(item.id)}
                    />
                  </div>
                  <div className="itemSubtotalContainer">
                    <p className="priceText">Subtotal</p>
                    <p>
                      {(item.price * item.quantity).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>{' '}
                  </div>
                  <div className="itemRemoveContainer">
                    <img
                      className="trash"
                      src={trash}
                      onClick={() => removeItem(item.id)}
                    />{' '}
                  </div>
                </div>
              </>
            ))}
            <hr style={{ width: '100%' }} />
            <div className="total">
              <Link to="/checkout">
                <Button onClick={() => checkout()}>
                  <p>Finalizar pedido</p>
                </Button>
              </Link>
              <div className="valor">
                Total{' '}
                {itemsToShow.map((item) => {
                  {
                    total = total + item.price * item.quantity;
                  }
                  return <></>;
                })}
                <strong>
                  {total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
              </div>
            </div>
          </CartContainer>
        </>
      )}
    </Container>
  );
}

export default Cart;
