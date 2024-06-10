import React, { useState } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Statistics from './Components/Statistics';
import Navbar from './Components/Navbar';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/Footer';

// Initial set of contacts
const initialContacts = [
  { id: 1, name: 'Surya Behara', type: 'Personal', gender: 'Male' },
  { id: 2, name: 'Prakash Behara', type: 'Business', gender: 'Female' },
];

function App() {
  // State for managing contacts and the current filter
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('All');

  // Function to add a new contact
  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  // Function to delete a contact by ID
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // Function to update an existing contact
  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  // Function to count contacts by type or gender
  const countContacts = (type, value) => {
    return contacts.filter(contact => contact[type] === value).length;
  };

  // Filter contacts based on the current filter setting
  const filteredContacts = contacts.filter(contact => 
    filter === 'All' || contact.type === filter
  );

  return (
    <>
      {/* Navigation bar */}
      <Navbar />
      <div className="App">
        <Container>
          <Row>
            {/* Column for the contact form */}
            <Col md={4}>
              <div className='ContactForm'>
                <ContactForm addContact={addContact} />
              </div>
            </Col>
            {/* Column for the contact list and statistics */}
            <Col md={8}>
              <Statistics countContacts={countContacts} />
              <div className='Checklistfilter'>
                {/* Filter buttons for contacts */}
                <button 
                  className={`btn btn-outline-primary btn-sm filterbtn ${filter === 'All' ? 'active' : ''}`} 
                  onClick={() => setFilter('All')}
                >
                  All
                </button>
                <button 
                  className={`btn btn-outline-primary btn-sm filterbtn ${filter === 'Personal' ? 'active' : ''}`} 
                  onClick={() => setFilter('Personal')}
                >
                  Personal
                </button>
                <button 
                  className={`btn btn-outline-primary btn-sm filterbtn ${filter === 'Business' ? 'active' : ''}`} 
                  onClick={() => setFilter('Business')}
                >
                  Business
                </button>
              </div>
              {/* Display contact list or a message if no contacts are available */}
              {filteredContacts.length > 0 ? (
                <ContactList 
                  contacts={filteredContacts} 
                  deleteContact={deleteContact} 
                  updateContact={updateContact} 
                />
              ) : (
                <p className='Noresponse'>No contacts available</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
