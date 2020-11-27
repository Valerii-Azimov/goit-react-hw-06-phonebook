// ==================Без React Toolkit==================
// import { combineReducers } from "redux";
// import actionTypes from "./contactsActionTypes";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload.contact];

//     case actionTypes.REMOVE:
//       return state.filter((contact) => contact.id !== payload.contactId);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload.filter;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });

import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import phonebookActions from "./phonebookActions";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.removeContact]: removeContact,
});

const filter = createReducer("", {
  [phonebookActions.findContact]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
