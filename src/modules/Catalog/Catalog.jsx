import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import catalogStore from './CatalogStore'

export const Catalog = observer (() => {
    const {categories, loadCategories, categoryID, setCategory, productsByCategory, loadCategory} = catalogStore

    useEffect(() => {
        loadCategories()
    }, [])

    // useEffect(() => {
    //     if(categories) {
    //         loadCategory (categories [categoryID])
    //     }
    // }, [categories, categoryID])

    return (
        <div className="container">
            <h2 className='catagories'>Categories</h2>
            <div className='category_items'>
                {categories && categories.map(({name, id}) => 
                <button onClick={()=>{setCategory(id)}} key={id} className="category_item">{name}</button>)}
            </div>
        </div>
    )
})