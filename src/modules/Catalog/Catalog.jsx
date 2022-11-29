import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import catalogStore from './CatalogStore'
import cartStore from '../Cart/CartStore'
import { CatalogCard } from './CatalogCard'

export const Catalog = observer (() => {
    const {categories, loadCategories, categoryID, setCategory, productsByCategory, loadCategory, isProductsLoading} = catalogStore

    const { addToCart } = cartStore

    useEffect(() => {
        loadCategories()
    }, [])

    useEffect(() => {
        if(categories && categoryID) {
            loadCategory ()
        }
    }, [categories, categoryID, loadCategory])

    return (
        <div className="container">
            <h2 className='categories_title'>Categories</h2>
            <div className='categories'>
                <div className='category_items_title'>
                    {categories && categories.map(({name, id}) =>
                    <button onClick={()=>{setCategory(id)}} key={id} className="category_items_btn">{name}</button>)}
                </div>
                <div className='category_items'>
                    {isProductsLoading && <h2>Loading...</h2>}
                    {!isProductsLoading && productsByCategory && productsByCategory.map((item, index) => <CatalogCard key={index} productCard={item} /> )}
                </div>
            </div>
        </div>
    )
})