import React, { useEffect, useState } from "react";
import axios from "axios";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

//when fetching data in store..
// import { fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  //when fetching data in store..
  // const { data: products, status } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //when fetching data in store..
    // dispatch(fetchProducts());

    const allProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };
    allProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
