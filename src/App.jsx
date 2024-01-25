import React from 'react'
import { Expertise, Footer, Header, Projects, Testimonials } from './Containers'
import { Marquee } from './components'


const app = () => {

  return (
    <div id="root">
      <Header />
      <Projects />
      <Expertise/>
      <Marquee/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default app