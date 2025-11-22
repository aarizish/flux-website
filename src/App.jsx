import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Docs from './components/Docs'
import Banner from './components/Banner'
import Contribute from './components/Contribute'
import Feedback from './components/Feedback'
import ThankYou from './components/ThankYou'
import Examples from './components/Examples'
import Companion from './components/Companion'
import Privacy from './components/Privacy'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/docs' element={ <Docs /> } />
        <Route path='/contribute' element={ <Contribute /> } />
        <Route path='/feedback' element={ <Feedback /> } />
        <Route path='/thank-you' element={ <ThankYou /> } />
        <Route path='/examples' element={ <Examples /> } />
        <Route path='/companion' element={ <Companion /> } />
        <Route path='/privacy' element={ <Privacy /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
