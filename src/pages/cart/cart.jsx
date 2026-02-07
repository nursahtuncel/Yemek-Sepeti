import React from 'react'
import { Link } from 'react-router-dom';
import { Minus } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Plus } from 'lucide-react';
import {removeProduct} from "../../redux/actions/basketAction"
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/actions/basketAction';



const cart = ({product}) => {
  const dispatch =useDispatch()
    const handleUpdate= () => {
dispatch(updateProduct(product.id,product.amount+1))
    };
  
    const handleMinus = () => {
      dispatch(updateProduct(product.id,product.amount-1))

    };
  
    const handleRemove = () => {
      dispatch(removeProduct(product.id))

    };
  
  return (

        <div className="mb-10 p-4 border rounded flex gap-4">
            <img src={product.photo} alt={product.title} className="size-[100px] rounded-lg" />
      
            <div className="w-full flex flex-col justify-between">
              <Link to={`/restorant/${product.restaurantId}`} className="text-xl font-semibold text-red-500 hover:underline">
                {product.title}
              </Link>
      
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">{product.price}₺</p>
      
                <div className="flex items-center gap-5">
                  <div className="flex items-center border text-xl rounded-lg">
                    <button
                      onClick={handleMinus}
                      disabled={product.amount === 1}
                      className="basket-btn disabled:cursor-not-allowed"
                    >
                      <Minus className="size-4" />
                    </button>
      
                    <span>{product.amount}</span>
      
                    <button onClick={handleUpdate} className="basket-btn">
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <button onClick={handleRemove} className="basket-btn">
                    <Trash className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
      
  
  )
}

export default cart
