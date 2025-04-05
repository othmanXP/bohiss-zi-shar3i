import { motion } from 'framer-motion';

const AnimatedText = ({ text, delay = 0, duration = 0.5 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;