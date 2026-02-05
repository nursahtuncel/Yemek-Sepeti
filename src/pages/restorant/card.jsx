import { Plus } from "lucide-react";

const Card = ({ product }) => {


  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-zinc-700 my-1">{product.desc}</p>
        </div>
        <p className="text-lg font-semibold">{product.price}₺</p>
      </div>

      <div className="relative">
        <img src={product.photo} alt={product.title} className="rounded-md object-cover size-full" />

        <button

          className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center hover:bg-red-100 transition cursor-pointer font-bold"
        >
         
        </button>
      </div>
    </div>
  );
};

export default Card;
