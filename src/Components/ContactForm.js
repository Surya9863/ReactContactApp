import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('Personal');
  const [gender, setGender] = useState('Male');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate an async operation (e.g., API call)
     setTimeout(() => {
     addContact({ name, type, gender });
     setName('');
     setIsLoading(false);
    }, 2000);
  };

  return (
    <Card style={{ width: '325px', margin: 'auto', padding: '20px' }}>
      <p className='Addcontactform'><ContactPageIcon/> Add New Contact</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div className="mb-3">
          <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </>
            ) : (
              'Add Contact'
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;
