import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../Utils/Button';
import Card from '../Utils/Card';
import CardList from '../Utils/CardList';
import Container from '../Utils/Container';
import shoppingCart from '/shoppingCart.png';
import { Film } from '../../App';
import { useStore } from '../../context/StoreContext';



function Home() {
  const {increaseQuant, cartItems} = useStore()
  const [films, setFilms] = useState([]);

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


  console.log(cartItems.filter(prod => prod.id));

  return (
    <Container>
      {films.length === 0 ? (
        <span className="loader"></span>
      ) : (
        <CardList>
          {films.map((item: Film) => (
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <h2>
                {item.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h2>
              <Button onClick={() => increaseQuant(item.id)}>
                {cartItems.find(prod => prod.id === item.id) == null ?
                (
                  <>
                    <span>
                    <img src={shoppingCart} alt="" /> 0
                  </span>
                  <p>Adicionar ao carrinho</p>
                  </>
                )
                : (
                  <>
                  <span>
                  <img src={shoppingCart} alt="" /> 1
                </span>
                <p>Item adicionado</p>
                </>
                )}
                
              </Button>
            </Card>
          ))}
        </CardList>
      )}
    </Container>
  );
}

export default Home;
