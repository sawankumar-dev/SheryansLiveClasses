import { useEffect, useState } from 'react';
import { useParams } from 'react-router'; // Changed to react-router-dom
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  
  // 1. Create states to manage the data, loading indicator, and errors
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const singleProduct = async () => {
    try {
      setLoading(true);
      // Axios stores the payload inside the .data object
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(result.data); 
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch product details.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Track [id] in the dependency array so it updates if the URL shifts
  useEffect(() => {
    if (id) {
      singleProduct();
    }
  }, [id]);

  // 3. Handle loading and error UI states
  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  // 4. Render the actual data retrieved from Fake Store API
  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.title}</h1>
      <p><strong>ID Number:</strong> {id}</p>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <h2>Price: ${product.price}</h2>
    </div>
  );
};

export default ProductDetails;
