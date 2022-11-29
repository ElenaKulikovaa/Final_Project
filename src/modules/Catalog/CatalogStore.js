import { makeAutoObservable, runInAction } from "mobx";

class CatalogStore {
    categories = undefined
    categoryID = undefined
    productsByCategory = undefined
    isProductsLoading = false

    constructor () {
        makeAutoObservable (this)
    }

    setCategory = (id) => {
        this.categoryID = id
    }

    loadCategories = () => {
        fetch ('https://api.escuelajs.co/api/v1/categories')
            .then (res=>res.json())
            .then (json=>{
                runInAction(() => {
                    this.categories = [...json]
                })
            })
    }

    loadCategory = () => {
        this.isProductsLoading = true
        fetch (`https://api.escuelajs.co/api/v1/categories/${this.categoryID}/products`)
            .then (res=>res.json())
            .then (json=>{
                runInAction(() => {
                    this.productsByCategory = [...json]
                    this.isProductsLoading = false
                })
            })
    }

}

const catalogStore = new CatalogStore()
export default catalogStore