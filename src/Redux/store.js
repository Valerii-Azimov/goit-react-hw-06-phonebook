// ==================Без React Toolkit==================
// import { createStore, combineReducers } from "redux";
// import phonebookReducer from "./phonebookReducer";

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebookReducer";

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});
export default store;
