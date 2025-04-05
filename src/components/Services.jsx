import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const Services = () => {
  const services = [
    {
      title: "تصميمات خاصة",
      description: "تصميم الزي الشرعي حسب طلبك الخاص"
    },
    {
      title: "قياسات دقيقة",
      description: "ضمان القياسات الدقيقة والمطابقة تماماً"
    },
  ];

  return (
    <>
      <section
        id="services"
        style={{
          padding: '6rem 0 4rem',
          position: 'relative',
          zIndex: 1,
          scrollMarginTop: '60px',
          textAlign: 'center',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '3rem',
              color: theme.colors.primary,
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Amiri', serif",
            }}
          >
            الخدمات
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: 'white',
                  padding: '3.5rem 2.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  borderTop: `5px solid ${theme.colors.secondary}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h3
                  style={{
                    fontSize: '2rem',
                    color: theme.colors.primary,
                    marginBottom: '1.5rem',
                    fontFamily: "'Amiri', serif",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: theme.colors.lightText,
                    fontSize: '1.3rem',
                    lineHeight: '1.8',
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <div
        style={{
          width: '100%',
          height: '3px',
          backgroundColor: theme.colors.secondary,
          margin: '4rem 0',
          opacity: 0.5,
        }}
      ></div>
    </>
  );
};

export default Services;