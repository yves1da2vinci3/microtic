import './App.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
