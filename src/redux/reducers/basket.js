const initialState = {
    isLoading:true,
    error:null,
    basket:[],


};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "x":
      return state;
    default:
      return state;
  }
};
export default basketReducer;
