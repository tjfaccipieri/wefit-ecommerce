import { Link } from "react-router-dom"
import Button from "../Utils/Button"
import CartContainer from "../Utils/CartContainer"
import Container from "../Utils/Container"
import checkout from '/checkout.png'

function Checkout() {
  return (
    <Container>
      <CartContainer>
        <h2>Compra realizada com sucesso!</h2>
        <img src={checkout} alt="" />
        <Link to='/'>
          <Button width={180}><p>Voltar</p></Button>
        </Link>
      </CartContainer>
    </Container>
  )
}

export default Checkout