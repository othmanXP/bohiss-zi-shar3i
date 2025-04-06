import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { theme } from '../styles/theme';

const Contact = () => {
  const textBeige = "#F5F0E6"; 
  const lightBeige = "#F8F5F0"; 
  const accentBeige = "#E8D8B8"; 

  const contactMethods = [
    {
      icon: <FaWhatsapp size={24} />,
      title: "واتساب",
      info: "0913077375",
      bgColor: "rgba(212, 167, 44, 0.2)",
      iconColor: accentBeige
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "الموقع",
      info: "بورتسودان - الثورة مريع 14",
      bgColor: "rgba(142, 108, 136, 0.2)",
      iconColor: accentBeige
    }
  ];

  return (
    <section id="contact" style={{
      padding: '6rem 0',
      background: theme.colors.primary,
      color: textBeige, 
      position: 'relative',
      overflow: 'hidden',
      scrollMarginTop: '80px'
    }}>
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'rgba(245, 240, 230, 0.05)',
        filter: 'blur(30px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: 'rgba(232, 216, 184, 0.1)',
        filter: 'blur(30px)'
      }}></div>

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: '2.8rem',
            fontFamily: "'Amiri', serif",
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block',
            color: textBeige
          }}>
            تواصلي معي
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              right: '50%',
              transform: 'translateX(50%)',
              width: '80px',
              height: '3px',
              backgroundColor: accentBeige
            }}></span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            opacity: 0.9,
            lineHeight: '1.6',
            color: lightBeige
          }}>
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem'
        }}>
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '12px',
                border: `1px solid rgba(245, 240, 230, 0.2)`,
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: method.bgColor,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: method.iconColor,
                fontSize: '1.5rem'
              }}>
                {method.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: "'Amiri', serif",
                marginBottom: '0.5rem',
                color: textBeige
              }}>
                {method.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                opacity: 0.9,
                lineHeight: '1.6',
                color: lightBeige
              }}>
                {method.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;