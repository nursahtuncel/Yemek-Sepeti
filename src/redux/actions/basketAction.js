import api from "../../api";
import ACTION_TYPES from "./actionTypes";

// sepetteki verileri alan
export const getBasket = () => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.BASKET_LOADING });
    api
      .get(`/cart`)
      .then((res) =>
        dispatch({ type: ACTION_TYPES.BASKET_SUCCES, payload: res.data }),
      )
      .catch((err) =>
        dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message }),
      );
  };
};
// sepetteki verileri güncelleyen
export const updateProduct = (id, newAmount) => {
  return (dispatch) => {
    api.patch(`/cart/${id}`,{ amount: newAmount }
)
   .then((res)=>dispatch({ type: ACTION_TYPES.UPDATE_ITEM ,payload:res.data}))
    .catch((err)=>alert("üzgünüz bir sorun oluştu"))
  };
};


export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        photo: product.photo,
        restaurantId: product.restaurantId,
        amount: 1,
      };

      const res = await api.post("/cart", newItem);

      dispatch({
        type: ACTION_TYPES.CREATE_ITEM,
        payload: res.data,
      });
    } catch (error) {
      alert("bir sorun oluştu");
      // istersek:
      // dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: error.message });
    }
  };
};

// sepetten veri kaldıran
export const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`/cart/${id}`);

      dispatch({
        type: ACTION_TYPES.REMOVE_ITEM,
        payload: id,
      });
    
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.BASKET_ERROR,
        payload: error.message,
      });
    }
  }}