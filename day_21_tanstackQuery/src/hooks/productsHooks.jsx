import { useQuery } from "@tanstack/react-query"
import { getProductsDataApi } from "../api/productApi"
import { useEffect, useState } from "react";

export const useProductApi = () => {
    const [ filteredData, setFilteredData] = useState([]);
    let { data, isPending, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProductsDataApi,
        staleTime: 10000,
    })
    const filterProducts = (searchParams) => {
        if(!searchParams) {
            setFilteredData(data)
        }
        const fildata = data.filter((product) => {
            return product.title.toLowerCase().includes(searchParams.toLowerCase())
        })
        setFilteredData(fildata);
        console.log(filteredData)
    }
    return {
        data, 
        isPending, 
        error,
        filterProducts,
        filteredData,
        setFilteredData
    }
}