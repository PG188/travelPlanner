import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (editedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact === selectedContact ? editedContact : contact
    );
    setContacts(updatedContacts);
    setSelectedContact(null);
  };

  const cancelEdit = () => {
    setSelectedContact(null);
  };

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="App">
      <h1>Contact Information</h1>
      <ContactForm
        onAddContact={addContact}
        selectedContact={selectedContact}
        onEditContact={editContact}
        onCancelEdit={cancelEdit}
      />
      <ContactList contacts={contacts} onEditClick={handleEditClick} />
    </div>
  );
}

export default App;