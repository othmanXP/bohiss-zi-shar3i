import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const About = () => {
  const aboutSections = [
    {
      title: "رؤيتي",
      content: "نشر ثقافة الزي الشرعي الذي يجمع بين الأصالة والأناقة",
      icon: "👑"
    },
    {
      title: "رسالتي",
      content: "نقديم تصاميم عصرية تحترم قيم الحشمة وتواكب التعاليم الإسلامية",
      icon: "🌙"
    },
    {
      title: "قيمي",
      content: "الجودة، الإبداع، الأصالة، والالتزام بالضوابط الشرعية",
      icon: "✨"
    }
  ];

  return (
    <>
      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{
          padding: '6rem 0',
          backgroundColor: theme.colors.background,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          backgroundColor: theme.colors.primary,
          opacity: 0.1,
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>

        <div className="container" style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '2.8rem',
              color: theme.colors.primary,
              position: 'relative',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                right: '0',
                width: '60%',
                height: '3px',
                backgroundColor: theme.colors.secondary
              }}></span>
              من هي بهيسة؟
            </h2>
            <p style={{
              color: theme.colors.lightText,
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              شابة منتقبة من بورتسودان وجدت في التصميم وسيلة لتوفير زي شرعي أنيق وملتزم للفتيات. تقوم بتفصيل القطع بنفسها لضمان الجودة والأسعار المناسبة. مشروعها يحمل رسالة لتمكين الفتيات من ارتداء زي محتشم دون عناء.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            marginTop: '3rem'
          }}>
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: 'white',
                  padding: '2.5rem 2rem',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  borderTop: `4px solid ${theme.colors.secondary}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: '3rem',
                  opacity: 0.1,
                  zIndex: 0
                }}>
                  {section.icon}
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: theme.colors.primary,
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {section.title}
                </h3>
                <p style={{
                  color: theme.colors.lightText,
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
      <div
        style={{
          width: '100%',
          height: '2px',
          backgroundColor: theme.colors.secondary,
          margin: '4rem 0',
          opacity: 0.5,
        }}
      ></div>
    </>
  );
};

export default About;