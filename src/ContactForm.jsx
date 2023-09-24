import React, { useState, useEffect } from 'react';

function ContactForm({ onAddContact, selectedContact, onEditContact, onCancelEdit }) {
  const [contact, setContact] = useState({ 
                                            firstName: '',
                                            lastName: '',
                                            phone: '',
                                            email: '' 
                                        });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedContact) {
      onEditContact(contact);
    } else {
      onAddContact(contact);
    }
    setContact({ 
        firstName: '',
        lastName: '',
        phone: '',
        email: '' 
      });
  };

  const handleCancel = () => {
    setContact({ 
        firstName: '',
        lastName: '',
        phone: '',
        email: '' 
      });
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={contact.lastName} onChange={handleChange} />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phone" value={contact.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={contact.email} onChange={handleChange} />
      </label>
      <button type="submit">{selectedContact ? 'Edit Contact' : 'Add Contact'}</button>
      {selectedContact && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  );
}

export default ContactForm;
