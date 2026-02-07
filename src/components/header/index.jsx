import { ShoppingBasket, ShoppingCart, UtensilsCrossed } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((store) => store.basket);
  const { restorant } = useSelector((store) => store.restorant);

  console.log(basket);
  const totalAmount = basket.reduce((sum, item) => sum + item.amount, 0);
  return (
    <header className="shadow">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl lg:text-3xl  tracking-tight font-k"
        >
          Yemek Sepeti
        </Link>

        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            Yakınızda {restorant.length}{" "}
            <UtensilsCrossed className="text-red-500" />{" "}
            <span className="max-md:hidden ">restoran var</span>
          </Link>
          <Link
            to="/cart"
            className="px-3 py-2 hover:bg-red-100 transition flex items-center rounded-full gap-2"
          >
            <ShoppingBasket />
            <span>{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
