import React from 'react';
import ContactItem from './ContactItem';
import Card from 'react-bootstrap/Card';

// ContactList component definition
function ContactList({ contacts, deleteContact, updateContact }) {
  return (
    <div>
      {contacts.map(contact => (
        // Wrapping each contact item in a Bootstrap Card component
        <Card className='ContactlistCard' key={contact.id}>
          <ContactItem
            contact={contact}
            deleteContact={deleteContact}
            updateContact={updateContact}
          />
        </Card>
      ))}
    </div>
  );
}

export default ContactList;
