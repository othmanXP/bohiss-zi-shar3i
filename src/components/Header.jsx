import { FaPhone } from 'react-icons/fa';
import { theme } from '../styles/theme';
import logo from '../assets/images/bohiss.png'; 

const Header = () => {
  return (
    <header
      style={{
        padding: '1.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(249, 245, 233, 0.95)', 
        backdropFilter: 'blur(5px)', 
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: '1.8rem',
            color: theme.colors.primary,
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: theme.colors.primary,
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
          }}
        >
          <FaPhone style={{ fontSize: '1rem' }} />
          <span style={{ fontFamily: "'Poppins', sans-serif" }}>0913077375</span>
        </div>
      </div>
    </header>
  );
};

export default Header;