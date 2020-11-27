// ==================Без React Toolkit==================
// import { v4 as uuidv4 } from "uuid";
// import actionTypes from "./contactsActionTypes";

// const addContact = (item) => ({
//   type: actionTypes.ADD,
//   payload: {
//     contact: {
//       id: uuidv4(),
//       item,
//     },
//   },
// });

// const removeContact = (contactId) => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     contactId,
//   },
// });

// const findContact = (filter) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, removeContact, findContact };

import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import actionTypes from "./contactsActionTypes";

const addContact = createAction("phonebook/add_contact", (item) => ({
  payload: {
    contact: {
      id: uuidv4(),
      item,
    },
  },
}));

const removeContact = createAction("phonebook/remove_contact");

const findContact = createAction("phonebook/find_contact");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, removeContact, findContact };
