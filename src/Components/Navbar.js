import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsIcon from '@mui/icons-material/Contacts';

function BrandExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
           <ContactsIcon style={{color:'#0d6efd'}}/>
             <span className='NavHeadline' >Contact Page</span>  
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;