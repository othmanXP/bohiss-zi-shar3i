import { useState } from "react";
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/images/bohiss.png";
import { theme } from "../styles/theme";

const navItems = [
  { title: "الرئيسية", url: "home", offset: -80 },
  { title: "من انا", url: "about", offset: -80 },
  { title: "الخدمات", url: "services", offset: -80 },
  { title: "تواصلي معي", url: "contact", offset: -80 },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav
      className="NavbarItems"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000, 
        backgroundColor: "rgba(249, 245, 233, 0.98)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(26, 94, 37, 0.1)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div
        className="navbar-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 5%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        
        <Link to="home" smooth={true} duration={500}>
          <img
            src={logo}
            alt="بهيس للزي الشرعي"
            style={{
              height: "190px", 
              width: "auto", 
              cursor: "pointer",
              position: "absolute", 
              top: "50%", 
              transform: "translateY(-50%)", 
            }}
          />
        </Link>

        
        <div
          className="Hamburger-Cross-Icons"
          onClick={handleClick}
          style={{
            fontSize: "1.5rem",
            color: theme.colors.primary,
            cursor: "pointer",
            display: "block",
          }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        
        <motion.ul
          initial={false} 
          animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: theme.colors.background,
            width: "85%",
            maxWidth: "350px",
            padding: "2rem",
            boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
            zIndex: 2000, 
            gap: "1.5rem",
            transform: open ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                textAlign: "center",
              }}
            >
              <Link
                to={item.url}
                smooth={true}
                duration={500}
                offset={item.offset}
                onClick={() => setOpen(false)}
                style={{
                  color: theme.colors.primary,
                  textDecoration: "none",
                  fontFamily: "'Amiri', serif",
                  fontSize: "1.3rem",
                  display: "block",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </Link>
            </motion.li>
          ))}

          
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            style={{
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            <a
              href="https://wa.me/2490913077375"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "#25D366",
                color: "white",
                padding: "0.5rem 1.2rem",
                borderRadius: "50px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                textDecoration: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              <FaWhatsapp />
              <span>واتساب</span>
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;