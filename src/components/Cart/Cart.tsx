import { Link } from "react-router-dom"
import Button from "../Utils/Button"
import EmptyCartContainer from "../Utils/CartContainer"
import Container from "../Utils/Container"
import emptyCart from '/emptyCart.png'
import { useStore } from "../../context/StoreContext"
import axios from "axios"
import { useEffect, useState } from "react"
import { Film } from "../../App"

function Cart() {

  const {cartItems, decreaseQuant} = useStore()

  const [films, setFilms] = useState<Film[]>([]);

  const selectedIds = cartItems.map(item => item.id)
  const selectedItems: Film[] = films.filter(item => selectedIds.includes(item.id))

  console.log(selectedItems);

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
  }, [])

  return (
    <Container>
      {cartItems.length === 0 ? (
        <EmptyCartContainer>
        <h2>Parece que não há nada por aqui :(</h2>
        <img src={emptyCart} alt="" />
        <Link to='/'>
          <Button width={180}><p>Voltar</p></Button>
        </Link>
      </EmptyCartContainer>
      ): (
        <>
          {selectedItems.map(item => (
            <>
            <p>{item.title}</p>
            <button onClick={() => decreaseQuant(item.id)}>remove</button>
            </>
          ))}
        </>
  )
}
    </Container>
  )
}

export default Cart