import ACTİON_TYPES from "../actions/actionTypes";
const initialState = {
  isLoading: true,
  error: null,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTİON_TYPES.BASKET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTİON_TYPES.BASKET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ACTİON_TYPES.BASKET_SUCCES:
      return {
        ...state,
        isLoading: false,
        basket: action.payload,
      };
    case ACTİON_TYPES.CREATE_ITEM:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };
    case ACTİON_TYPES.UPDATE_ITEM:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                amount: action.payload.amount,
              }
            : item,
        ),
      };

    case ACTİON_TYPES.REMOVE_ITEM:
      return {
        ...state,
        basket:
          state.basket?.filter((item) => item.id !== action.payload) || [],
      };

    default:
      return state;
  }
};
export default basketReducer;
