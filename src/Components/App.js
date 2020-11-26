import React, { Component } from "react";
import Layout from "./Layout/Layout";
import Section from "./Section/Section";
import AddContactsForm from "./AddContactsForm/AddContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import ContactFinder from "./ContactFinder/ContactFinder";

export default class App extends Component {
  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem("contacts");

  //   if (persistedContacts) {
  //     this.setState({
  //       contacts: JSON.parse(persistedContacts),
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <AddContactsForm />
        </Section>
        <Section title="Contacts">
          <ContactFinder />
          <ContactsList />
        </Section>
      </Layout>
    );
  }
}
