import { ActionTypes } from "../contants/actions-types";

const intialState = {
  products: [],
  userDetails:[]
};

 export const Reducer=(state=intialState, action)=>{
  switch (action.type) {
    case ActionTypes.ADD_USER_DETAILS:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};
export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};