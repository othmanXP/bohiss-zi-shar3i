import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar /> 
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;