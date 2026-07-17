import { useNavigate } from "react-router";

const ProductsCard = ({product}) => {
  const navigate = useNavigate()
  const onSubmit = (id) => {
    console.log(id)
    navigate(`/detail/${id}`)
  }
  return (
    <div className="bg-white w-100 h-50">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </div>
      <button onClick={() => {onSubmit(product.id)}}>buy</button>
    </div>
  )
}

export default ProductsCard