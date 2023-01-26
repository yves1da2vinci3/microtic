import './App.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AskPrice from './Screens/AskPrice';
import About from './Screens/About';
import References from './Screens/References';
import Realisation from './Screens/Realisation';
import NavProvider from './Context/NavContext';

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
        </Routes>
      </Router>
      </NavProvider>

    </MantineProvider>
  )
}

export default App
