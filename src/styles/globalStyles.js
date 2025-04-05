import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.english};
    direction: rtl;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.arabic};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.lightText};
    margin-bottom: 1.5rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: ${({ theme }) => theme.transitions.smooth};
  }
  
  .container {
    width: 90%;
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 1rem;
  }
  Islamic geometric pattern background */
  .islamic-pattern {
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(135deg, 
          ${({ theme }) => theme.colors.background} 25%, 
          transparent 25%) -50px 0,
        linear-gradient(225deg, 
          ${({ theme }) => theme.colors.background} 25%, 
          transparent 25%) -50px 0,
        linear-gradient(315deg, 
          ${({ theme }) => theme.colors.background} 25%, 
          transparent 25%),
        linear-gradient(45deg,  
          ${({ theme }) => theme.colors.background} 25%, 
          transparent 25%);
      background-size: 100px 100px;
      opacity: 0.1;
      z-index: -1;
    }
    .islamic-pattern-2 {
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 50% 50%, 
        transparent 20%, 
        ${({ theme }) => theme.colors.background} 21%,
        ${({ theme }) => theme.colors.background} 79%, 
        transparent 80%),
      radial-gradient(circle at 50% 50%, 
        transparent 20%, 
        ${({ theme }) => theme.colors.background} 21%,
        ${({ theme }) => theme.colors.background} 79%, 
        transparent 80%);
    background-size: 100px 100px;
    background-position: 0 0, 50px 50px;
    opacity: 0.1;
    z-index: -1;
  }
    @media (max-width: 768px) {
  .desktop-nav {
    display: none !important; /* Hide desktop navigation on mobile */
  }

  .mobile-menu-btn {
    display: block !important; /* Show mobile menu button on mobile */
  }

  .contact-buttons {
    display: flex !important; /* Ensure contact buttons are visible on mobile */
    flex-direction: column; /* Stack buttons vertically on smaller screens */
    gap: 1rem;
  }
}

.contact-buttons {
  display: flex !important;
  flex-direction: column; /* Stack buttons vertically on smaller screens */
  gap: 1rem;
  z-index: 9999; /* Ensure it is above other elements */
}

@media (min-width: 769px) {
  .desktop-nav {
    display: flex !important; /* Show desktop navigation on desktop */
  }

  .mobile-menu-btn {
    display: none !important; /* Hide mobile menu button on desktop */
  }

  .contact-buttons {
    display: flex !important; /* Keep buttons horizontal on desktop */
    flex-direction: row;
    gap: 1rem;
  }
}

@media (min-width: 769px) {
  .contact-buttons {
    flex-direction: row; /* Keep buttons horizontal on desktop */
  }
}
    }
// Add to your GlobalStyles component
a:hover .nav-underline {
  width: 100%;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
}
  // Mobile menu item hover effect
.mobile-nav-item:hover {
  background-color: rgba(26, 94, 37, 0.05);
  transform: translateX(-3px);
}

// Smooth transitions for all hover effects
a, button, .nav-item {
  transition: all 0.3s ease;
}

// Active nav item indicator
.nav-item.active .nav-underline {
  width: 100%;
}
  
    `;