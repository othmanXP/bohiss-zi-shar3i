import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import img1 from '../assets/images/3ibaya.jpg';
import img2 from '../assets/images/3ibaya2.jpg';
import img3 from '../assets/images/3ibaya3.jpg';

const Hero = () => {
  const lines = [
    { text: "عبايتك بتصميك الخاص!", delay: 0.1 },
    { text: "عندك قماش عجبك وعايزة تفصلي بيهو عباية؟", delay: 0.2 },
    { text: "ما تشيلي هم جيبي قماشك وانا افصل ليك عباية شيك وعلى مقاسك بالضبط", delay: 0.2 },
  ];

  const images = [
    { src: img1, alt: "عباية 1", delay: 0.4 },
    { src: img2, alt: "عباية 2", delay: 0.6 },
    { src: img3, alt: "عباية 3", delay: 0.8 }
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${theme.colors.background} 0%, #f0e9dd 100%)`,
      padding: '6rem 2rem',
      scrollMarginTop: '80px'
    }}>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${theme.colors.primary} 0%, transparent 70%)`,
          filter: 'blur(40px)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${theme.colors.secondary} 0%, transparent 70%)`,
          filter: 'blur(40px)'
        }}
      />

     
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            marginBottom: '3rem',
            position: 'relative'
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '3.5rem',
              color: theme.colors.primary,
              fontFamily: "'Amiri', serif",
              fontWeight: 700,
              lineHeight: '1.3',
              marginBottom: '1.5rem'
            }}
          >
            بهيس للزي الشرعى
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              height: '4px',
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
        </motion.div>

        {/* Hero Lines */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 3rem'
        }}>
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: line.delay, duration: 0.6 }}
              style={{
                marginBottom: '1.2rem'
              }}
            >
              <motion.p
                whileHover={{ scale: 1.02 }}
                style={{
                  fontSize: '1.8rem',
                  color: theme.colors.primary,
                  fontFamily: "'Amiri', serif",
                  lineHeight: '1.6',
                  display: 'inline-block'
                }}
              >
                {line.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: image.delay
              }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
              }}
              style={{
                perspective: '1000px'
              }}
            >
              <motion.img 
                src={image.src} 
                alt={image.alt}
                style={{
                  width: '300px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  border: `1px solid ${theme.colors.secondary}`,
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;