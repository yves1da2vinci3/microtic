import './App.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AskPrice from './Screens/AskPrice';
import About from './Screens/About';
import References from './Screens/References';
import Realisation from './Screens/Realisation';
import NavProvider from './Context/NavContext';
import WebCreation from './Screens/Service/WebCreation';
import Advertising from './Screens/Service/Advertising';
import Video from './Screens/Service/Video';
import Ecommerce from './Screens/Service/Ecommerce';
import AppMobile from './Screens/Service/AppMobile';
import Identity from './Screens/Service/Identity';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavProvider>

      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/askPrice' element={<AskPrice/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/reference' element={<References/>} />
          <Route path='/realisation' element={<Realisation/>} />
          <Route path='/service/web' element={<WebCreation/>} />
          <Route path='/service/ecommerce' element={<Ecommerce/>} />
          <Route path='/service/ad' element={<Advertising/>} />
          <Route path='/service/video' element={<Video/>} />
          <Route path='/service/app' element={<AppMobile/>} />
          <Route path='/service/identity' element={<Identity/>} />
        </Routes>
      </Router>
      </NavProvider>

    </MantineProvider>
  )
}

export default App
