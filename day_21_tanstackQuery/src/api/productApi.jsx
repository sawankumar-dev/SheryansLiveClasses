import { api } from "../config/axiosInstance";

export let getProductsDataApi = async () => {
    try {
        console.log("api call function running..")
        let res = await api.get("/products");
        return res.data.products;
    } catch (error) {
        console.log("error in products api", error)
    }
}