import { ArrowDown, Bike, Clock, Clock1, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ restorant }) => {
  return (
    <Link
      to={`/restorant/${restorant.id}`}
      className="relative shadow overflow-hidden hover:bg-gray-200 hover-shadow-lg cursor-pointer transition "
    >
      <span className="bg-red-500  py-1 px-3 text-sm absolute end-1 top-2 text-white rounded-md">
        {restorant.distance} km uzaklıkta
      </span>

      <img
        src={restorant.photo}
        alt={ClipboardItem.name}
        className="w-full object-cover h-[250px] lg:-[200x]"
      />
      <div className="p-3">
        {/* başlık */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-xl  py-2 font-semibold">
            {restorant.name}
          </h3>
          <p className="flex items-center gap-2 text-red-500">
            <Star /> {restorant.rating}
          </p>
        </div>
    
        {/* teslimat süresi */}
        <div className="flex justify-between   items-center ">
          <div className="flex  items-center my-2 gap-2 font-semibold">
               {/* min teslimat alanı */}
        <div className="flextems-center text-zinc-700">
       
          <span>{restorant.minPrice}</span>
        </div> 
            <Clock1 className="text-red-500" />
            <span className="text-gray-500">
              {restorant.estimateDelivery}dk
            </span>
          </div>
          {restorant.isDeliveryFree && (
            <div className="flex items-center gap-2 font-semibold">
              <Bike className="size-5" />
              <span className="text-gray-500">Ücretsiz</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Cart;
