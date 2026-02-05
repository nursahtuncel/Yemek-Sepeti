import React from "react";
import RestoranDetail from "./restoranDetail";
import RestoranProduct from "./restoranProduct";

const Restaurand = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <RestoranDetail />
        </div>
      </div>
      <div className="shadow">
        {" "}
        <div className="container">
          {" "}
          <RestoranProduct />
        </div>
      </div>
    </div>
  );
};

export default Restaurand;
