import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

// ContactItem component definition
function ContactItem({ contact, deleteContact, updateContact }) {
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const [editedContact, setEditedContact] = useState(contact); // State for edited contact details
  const [errors, setErrors] = useState({}); // State for form validation errors
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
    setErrors({});
  };

  // Handle contact update
  const handleUpdate = () => {
    const validationErrors = {};
    // Validate name field
    if (!editedContact.name) {
      validationErrors.name = 'Name is required';
    }
    // Validate type field
    if (!editedContact.type) {
      validationErrors.type = 'Type is required';
    }
    // Validate gender field
    if (!editedContact.gender) {
      validationErrors.gender = 'Gender is required';
    }

    // If there are validation errors, set them
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Show loading spinner
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        updateContact(editedContact);
        setIsEditing(false);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <div>
      {isEditing ? (
        <div className='Contacteditclass'>
          <p className='Addcontactform'><EditNoteIcon /> Edit Details </p>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label className='Labeltittle'>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={editedContact.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formType">
                <Form.Label className='Labeltittle'>Type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  value={editedContact.type}
                  onChange={handleChange}
                >
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                </Form.Control>
                {errors.type && <p className="text-danger">{errors.type}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGender">
                <Form.Label className='Labeltittle'>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={editedContact.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
                {errors.gender && <p className="text-danger">{errors.gender}</p>}
              </Form.Group>
            </Col>
            <Col md={6} className="d-flex align-items-end">
              <button
                className='btn btn-primary savebtn'
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                ) : (
                  'Save'
                )}
              </button>
            </Col>
          </Row>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={contact.name} secondary={`${contact.type} - ${contact.gender}`} />
            </ListItem>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <Button onClick={handleEdit} startIcon={<EditNoteIcon />}></Button>
            <Button onClick={() => deleteContact(contact.id)} startIcon={<DeleteIcon />}></Button>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ContactItem;
