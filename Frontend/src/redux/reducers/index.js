import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer ,Reducer} from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  userState: Reducer
 
});
export default reducers;