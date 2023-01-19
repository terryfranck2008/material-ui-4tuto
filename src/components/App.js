import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from "./ui/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import { useState } from 'react';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/services' element={<div>Services</div>} />
          <Route path='/customsoftware' element={<div>Customsoftware</div>} />
          <Route path='/mobileapps' element={<div>Mobileapps</div>} />
          <Route path='/websites' element={<div>Websites</div>} />
          <Route path='/revolution' element={<div>Revolution</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='/estimate' element={<div>Estimate</div>} />
        </Routes>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
