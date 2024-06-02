

import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import Footer from '../../component/footers/footer';

const NotFound = () => {
  return (
    <>
    
    <Header/>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist or page not link to route yet.</p>
      <Link to="/">Go back to Home</Link>
    </div>

    <Footer/>
    </>
  );
};

export default NotFound;
