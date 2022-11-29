import { Link } from 'react-router-dom'
import { Image } from 'antd'
import cartStore from '../Cart/CartStore'

export const CatalogCard = ({productCard}) => {
    const {addToCart} = cartStore
    const {id, title, price, images = [0]} = productCard

    const handleClick = () => {
        addToCart(productCard)
    }

    return (
        <div className='category_item'>
            <div className='category_item_image'>
                <Image src={images} alt={title} />
            </div>
            <h3 className='category_item_title'><Link to={`/catalog/${id}`} >{title}</Link></h3>
            <div className='category_item_details'>
                <div className='category_item_price'>{price} $</div>
                <button className='category_item_btn' onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    )
}