import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const Footer = () => {
  return (
    <motion.footer
      style={{
        backgroundColor: '#111',
        color: 'rgba(255, 255, 255, 0.7)',
        padding: '2rem 0',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}
    >
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} بهيس للزي الشرعى - جميع الحقوق محفوظة
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
      </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;