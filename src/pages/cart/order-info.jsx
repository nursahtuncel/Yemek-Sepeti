import React from 'react'

const orderInfo = ({basket}) => {
  if(basket.length===0) return null;

  const totalAmount =basket.reduce(
  (sum, item) => sum + item.amount,
  0
);

  const totalPrice= basket.reduce((sum,item)=>sum+item.price*item.amount,0)
  return (
    <div className="p-5 rounded-md border h-fit md:sticky md:top-0">
      <h2 className="font-semibold text-lg">Sipariş Detayları</h2>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Ürün Adedi:</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Toplam Fiyat:</span>
        <span className="text-lg font-bold text-red-500">{totalPrice.toFixed(2)}₺</span>
      </p>
    </div>
  )
}

export default orderInfo
