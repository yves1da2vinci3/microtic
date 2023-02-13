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
import Print from './Screens/Service/Print';
import Light from './Screens/Service/Light';
import Wear from './Screens/Service/Wear';
import Building from './Screens/Service/Building';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
<ToastContainer />

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
          <Route path='/service/print' element={<Print/>} />
          <Route path='/service/light' element={<Light/>} />
          <Route path='/service/wear' element={<Wear/>} />
          <Route path='/service/building' element={<Building/>} />
        </Routes>
      </Router>
      </NavProvider>

    </MantineProvider>
  )
}

export default App
