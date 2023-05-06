import ThemeReducer from "./ThemeReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { ProductsReducer } from "./Products";
import { categoryReducer } from "./Categories";
import { supCategoryReducer } from "./SupCategory";
import { UsersReducer } from "./user";
import { CitiesReducer } from "./Cities";
import { GovReducer } from "./Governate";
import { countriesReducer } from "./country";
import ordersReducer from './Orders'

const rootReducer = combineReducers({
  ThemeReducer,
  auth: authReducer,
  products: ProductsReducer,
  categories: categoryReducer,
  orders:ordersReducer,
  Cities:CitiesReducer,
  goverments:GovReducer,
  countries:countriesReducer,
  supCategories: supCategoryReducer,
  users:UsersReducer
});

export default rootReducer;
