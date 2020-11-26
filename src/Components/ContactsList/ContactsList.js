import React from "react";
import { connect } from "react-redux";
import phoneboolActions from "../../Redux/phonebookActions";
import "./ContactsList.css";

function ContactsList({ contacts, onRemoveContact }) {
  return (
    <ul className="ContactsList">
      {contacts.map(({ id, item, name, number }) => (
        <li key={id} className="ContactsList--item">
          <div>
            {item.name}: {item.number}
          </div>
          <button
            type="button"
            onClick={() => onRemoveContact(id)}
            className="ContactsListItem-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items.filter((contact) =>
    contact.item.name
      .toLowerCase()
      .includes(state.contacts.filter.toLowerCase())
  ),
});

const mapDispatchToProps = {
  onRemoveContact: phoneboolActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
