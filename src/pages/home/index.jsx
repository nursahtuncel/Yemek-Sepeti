import React from "react";
import { useSelector } from "react-redux";
import Error from "../../components/error";
import Loader from "../../components/loader";
import Cart from "./cart";

const Home = () => {
  const { isLoading, error, restorant } = useSelector(
    (store) => store.restorant,
  );

  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text2xl mb-5">Yakininizdaki Restoranlar </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {restorant.map((restorantItem) => (
            <Cart key={restorantItem.id} restorant={restorantItem} />
          ))}
        </div>
      )}
      {!isLoading && restorant.length === 0 && <p>Restoran bulunamadı</p>}
    </div>
  );
};

export default Home;
