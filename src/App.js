import { React, useEffect  } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import './App.css';

import { MainHeader } from './components/Header'
import { MainFooter } from './components/Footer';

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Career } from './pages/Career';
import ErrorPage from './pages/404';

function App() {
  useEffect(() => {
    document.title = 'Home - Paonia Inc.';
  }, []);

  const isTablet = useMediaQuery({query: '(max-width: 768px)'})
  const isMobile = useMediaQuery({query: '(max-width: 425px)'})
  const viewPort = isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <HashRouter>
          <MainHeader viewport={viewPort}/>
          <Routes>
            <Route path="/" element={<Home viewport={viewPort}/>}/>
            <Route path="/about" element={<About viewport={viewPort}/>}/>
            <Route path="/contact" element={<Contact viewport={viewPort}/>}/>
            <Route path="/careers" element={<Career viewport={viewPort}/>}/>
            <Route path="*" element={<ErrorPage/>} />
            {/* <Route path="*" element={""} /> */}
          </Routes>
          <MainFooter/>
        </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
