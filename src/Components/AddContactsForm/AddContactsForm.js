import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookActions from "../../Redux/phonebookActions";
import "./AddContactsForm.css";

class AddForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.onAddContact(this.state);

    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="AddContactsForm">
        <label>
          Name{" "}
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
            className="AddContactsForm__Name"
            name="name"
            required
          ></input>
        </label>

        <label>
          Number{" "}
          <input
            type="tel"
            value={number}
            onChange={this.handleNumberChange}
            className="AddContactsForm__Number"
            name="number"
            required
          ></input>
        </label>

        <button type="submit" className="AddContactsForm__button">
          {" "}
          Add contacts
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: phonebookActions.addContact,
};

export default connect(null, mapDispatchToProps)(AddForm);
