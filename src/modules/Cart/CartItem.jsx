export const CartItem = ({cartItem, deleteCartItem}) => {

    const {id, title, count, price} = cartItem

    const handleClick = (id) => {
        deleteCartItem(id)
    }


    return (
        <div className="container">
            <div className="cart_wrapper">
                <div className="cart_details">
                    <div className="cart_item_title">{title}</div>
                    <div className="cart_item_count">{count} th.</div>
                    <div className="cart_item_price">{price} $</div>
                    <div className="cart_item_btn"><button onClick={()=>handleClick(id)}>Delete</button></div>
                </div> 
            </div>
        </div>
    )
}