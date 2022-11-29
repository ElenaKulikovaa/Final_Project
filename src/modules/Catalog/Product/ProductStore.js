import { makeAutoObservable, runInAction } from "mobx";

export class ProductStore {
    productData = {};
    isProductLoading = false;

    constructor () {
        makeAutoObservable (this)
    }

    loadProduct = async (productId) => {
        this.isProductLoading = true
        const response = await fetch (`https://api.escuelajs.co/api/v1/products/${productId}`)
        const data = await response.json ()
        runInAction (() => {
            this.productData = {...data}
            this.isProductLoading = false
        })

    }

}