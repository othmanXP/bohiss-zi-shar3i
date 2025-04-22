import { motion } from "framer-motion";
import { theme } from "../styles/theme";

import img1 from "../assets/images/w1.heic";
import img2 from "../assets/images/w2.heic";
import img3 from "../assets/images/w3.heic";
import img4 from "../assets/images/w4.heic";
import img5 from "../assets/images/w5.jpeg";
import img6 from "../assets/images/w6.jpeg";
import img7 from "../assets/images/w7.jpeg";
import img8 from "../assets/images/w8.heic";
import img9 from "../assets/images/w9.heic";
import img10 from "../assets/images/w10.heic";
import img11 from "../assets/images/w11.heic";
import img12 from "../assets/images/w12.heic";

function Work() {
  const images = [
    { src: img1, alt: "عباية 1", delay: 0.4 },
    { src: img2, alt: "عباية 2", delay: 0.6 },
    { src: img3, alt: "عباية 3", delay: 0.8 },
    { src: img4, alt: "عباية 3", delay: 1.0 },
    { src: img5, alt: "عباية 3", delay: 1.2 },
    { src: img6, alt: "عباية 3", delay: 1.4 },
    { src: img7, alt: "عباية 3", delay: 1.6 },
    { src: img8, alt: "عباية 3", delay: 1.8 },
    { src: img9, alt: "عباية 3", delay: 2.0 },
    { src: img10, alt: "عباية 3", delay: 2.2 },
    { src: img11, alt: "عباية 3", delay: 2.4 },
    { src: img12, alt: "عباية 3", delay: 2.6 },
  ];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "3rem",
          color: theme.colors.primary,
          textAlign: "center",
          paddingTop: "6rem",
          marginBottom: "4rem",
          fontFamily: "'Amiri', serif",
        }}
      >
        بعض أعمالي
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginTop: "3rem",
          paddingBottom: "6rem",
          flexWrap: "wrap",
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: image.delay,
            }}
            whileHover={{
              y: -15,
              scale: 1.03,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                border: `1px solid ${theme.colors.secondary}`,
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: theme.colors.secondary,
          margin: "4rem 0",
          opacity: 0.5,
        }}
      ></div>
    </div>
  );
}

export default Work;
