import CartItem  from '../CartItem/CartIem';

import { Wrapper } from './Cart.styles'

import { CartItemType } from '../App';
import { CardTravelTwoTone } from '@material-ui/icons';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items In Cart.</p> : null}
      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  )
}

export default Cart;