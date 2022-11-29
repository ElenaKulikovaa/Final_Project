import { observer } from "mobx-react-lite"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProductStore } from "./ProductStore"
import { Image } from 'antd';


export const Product = observer (() => {
    const {productId} = useParams ()
    const [productStore] = useState (new ProductStore())
    const {loadProduct, productData, isProductLoading} = productStore
    const {title, images = [0], price, description} = productData

    useEffect (() => {
        if (productId) {
            loadProduct (productId)
        }
    }, [])

    return (
        <div className="container">
            {isProductLoading && <h2>Loading Product...</h2>}
            {!isProductLoading && 
                <div className="product_wrapper">
                    <h1 className="product_title" >{title}</h1>
                    <Image className="product_image" src={images} alt={title} />
                    <p className="product_description">{description}</p>
                    <div className="product_details">
                        <div className="product_price">{price} $</div>
                        {/* <button className="product_btn">Add to Cart</button> */}
                    </div>
                </div>}
        </div>
    )
})