import React from 'react';
import Card from 'react-bootstrap/Card';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Badge from 'react-bootstrap/Badge';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Face3Icon from '@mui/icons-material/Face3';
import FaceIcon from '@mui/icons-material/Face';

// Statistics component definition
function Statistics({ countContacts }) {
  return (
    <div className='statistics'>
      {/* Card component for the statistics */}
      <Card style={{ margin: 'auto', padding: '20px' }}>
        <p className='Addcontactform'><AnalyticsIcon/> Statistics </p> {/* Title with statistics icon */}
        <Row> {/* Row for displaying statistics */}
          {/* Column for displaying male contacts count */}
          <Col md={3} className='statsallign'> 
            <Badge bg="primary" style={{ textAlign: 'justify' }}> <FaceIcon style={{ fontSize: '14px' }} />Male {countContacts('gender', 'Male')} </Badge>
          </Col>
          {/* Column for displaying female contacts count */}
          <Col md={3} className='statsallign'>
            <Badge bg="primary" style={{ textAlign: 'justify' }}> <Face3Icon style={{ fontSize: '14px' }} /> Female {countContacts('gender', 'Female')}</Badge>
          </Col>
          {/* Column for displaying personal contacts count */}
          <Col md={3} className='statsallign'>
            <Badge bg="primary"> <AccountCircleIcon style={{ fontSize: '14px' }} /> Personal {countContacts('type', 'Personal')}</Badge>
          </Col>
          {/* Column for displaying business contacts count */}
          <Col md={2} className='statsallign'>
            <Badge bg="primary"> <BusinessCenterIcon style={{ fontSize: '14px' }} /> Business {countContacts('type', 'Business')}</Badge>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Statistics;
