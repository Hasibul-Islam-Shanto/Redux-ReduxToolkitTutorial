import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handleRemove = (id) =>{
    dispatch(remove(id))
  }
  return (
    <>
    <h3>Carts</h3>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart