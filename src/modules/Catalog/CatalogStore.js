import { makeAutoObservable, runInAction } from "mobx";

class CatalogStore {
    categories = undefined
    categoryID = 0
    productsByCategory = undefined

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

    // loadCategory = (categoryID) => {
    //     fetch (`https://api.escuelajs.co/api/v1/categories/${categoryID}/products`)
    //         .then (res=>res.json())
    //         .then (json=>{
    //             runInAction(() => {
    //                 this.productsByCategory = [...json]
    //             })
    //         })
    // }

}

const catalogStore = new CatalogStore()
export default catalogStore