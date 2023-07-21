import ActiveUsers from '@/components/ActiveUsers'
import Clients from '@/components/ClientsSlider'
import Contactus from '@/components/ContactUs'
import Content from '@/components/Content'


import Feature from '@/components/Feature'
import Game from '@/components/Game'
import Hero from '@/components/Hero'

import Projects from '@/components/Projects'
import Roadmap from '@/components/Roadmap'
import Testimonal from '@/components/Testimonal'


export default function Home() {
  return (
      <main>
       
       <Hero/>
       <Game/>
       <Content/>
       <Roadmap/>
       <ActiveUsers/>
       <Projects/> 
       <Clients/>
       <Testimonal/>
       <Contactus/>
       
        
      
      
    </main>
  )
}
