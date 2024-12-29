import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const[playState, setPlayState] = useState(false);
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
      <Title subtitle = 'Our Program' title='What we offer'/>
      <Programs/>
      <About setPlayState = {setPlayState}/>
      <Title subtitle = 'Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle = 'Testimonial' title='What Student Says'/>
      <Testimonial/>
      <Title subtitle = 'Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App