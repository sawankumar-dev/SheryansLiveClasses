import { useState } from "react"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import { useProductApi } from "../hooks/productsHooks"

const ShopPage = () => {
    const [rerender, setRerender] = useState(true)
  const { isPending, error, data, filteredData } =  useProductApi();
  console.log("filtered dat",filteredData)
  console.log(data)
  console.log("Shop rendering")
  return (
        <div className="flex flex-col pt-15 justify-center">
            <Filter setRerender={setRerender}/>
            <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 pt-13 sm:w-200 md:w-300 lg:350 xl:w-400">
                {isPending ? <p>Loading...</p>: filteredData.length>1 ? filteredData.map((product) => <ProductCard product={product} key={product.id}/>): data.map((product) => <ProductCard product={product} key={product.id}/>)}
            </div>
        </div>
  )
}

export default ShopPage