import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader'
import Error from '../../components/error'
import BasketEmpty from "./basket-emty.jsx"
import Card from "./cart.jsx"
import OrderInfo from './order-info.jsx'


const index = () => {

  const {isLoading,basket,error}=useSelector((store)=>store.basket)

  return (
      <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-4">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : basket.length === 0 ? (
            <BasketEmpty />
          ) : (
            basket.map((item) => <Card key={item.id} product={item} />)
          )}
        </div>

        <OrderInfo basket={basket} />
      </div>
    </div>
  )
}

export default index
