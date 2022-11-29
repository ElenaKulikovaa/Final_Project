import { CartItem } from "./CartItem";
import cartStore from "./CartStore"
import { observer } from "mobx-react-lite";

export const Cart = observer (() => {
    const {cart, deleteCartItem, totalPrice} = cartStore

    return (
        <>
            {cart.length === 0 && <h2>Empty</h2>}
            {cart.length > 0 && 
            <div>
                <h2 className="cart_title">Cart</h2>
                {cart.map((cartItem) => 
                <CartItem cartItem={cartItem} key={cartItem.id} deleteCartItem={deleteCartItem}/>)}
                <h3 className="cart_total">Total Price: {totalPrice} $</h3>
            </div>
            }
        </>
    )
})