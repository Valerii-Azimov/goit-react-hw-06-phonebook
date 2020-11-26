import React from "react";
import { connect } from "react-redux";
import "./ContactFinder.css";
import phonebookActions from "../../Redux/phonebookActions";

const ContactFinder = ({ value, onChangeFilter }) => {
  return (
    <label className="ContactFinder">
      Find contacts by name
      <input
        type="text"
        className="ContactFinder-input"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = {
  onChangeFilter: phonebookActions.findContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactFinder);
