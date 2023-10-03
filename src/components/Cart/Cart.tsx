import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../App';
import { useStore } from '../../context/StoreContext';
import Button from '../Utils/Button';
import EmptyCartContainer, { CartContainer } from '../Utils/CartContainer';
import Container from '../Utils/Container';
import emptyCart from '/emptyCart.png';
import plusIcon from '/plusIcon.png';
import minusIcon from '/minusIcon.png';
import trash from '/trash.png';

function Cart() {
  const { cartItems, decreaseQuant, increaseQuant, removeItem } = useStore();

  const [films, setFilms] = useState<Film[]>([]);

  // const selectedIds = cartItems.map((item) => item.id);
  // const selectedItems: Film[] = films.filter((item) =>
  //   selectedIds.includes(item.id)
  // );

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

  useEffect(() => {
    // getItens()
  }, []);

  let total: number = 0

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
            {itemsToShow.map((item) => (
              <div>
                <img src={item.image} alt="" />
                <p className='title'>{item.title}</p>
                <div className="quantity">
                  <img src={minusIcon} alt="" onClick={() => decreaseQuant(item.id)} />
                  <span>{item.quantity}</span>
                  <img src={plusIcon} alt="" onClick={() => increaseQuant(item.id)} />
                </div>
                <p className="price">{(item.price * item.quantity).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <img className='trash' src={trash} onClick={() => removeItem(item.id)} />
              </div>
            ))}

            <hr style={{width: '100%'}} />

            <Button>Finalizar compra</Button>
            <div>
              Valor total: {itemsToShow.map(item => {
                {total = total + (item.price * item.quantity)}
                return <></>
              })}
              {total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </div>

          </CartContainer>
        </>
      )}
    </Container>
  );
}

export default Cart;
