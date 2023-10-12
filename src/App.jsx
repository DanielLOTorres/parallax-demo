import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef } from 'react';

import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';


function App() {
  const ref = useRef(); 

  useEffect(() => {
    ref.current.scrollTo(3)
  }, [])

  return (
    <div>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer speed={1} offset={0} factor={2} style={{backgroundImage: `url(${moon})`, backgroundSize: 'cover',}}></ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} factor={4} style={{backgroundImage: `url(${land})`, backgroundSize: 'cover',}}></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.2, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>You almost lost him!</h2>
          <h3>Follow him back to safe land!</h3>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Help!</h2>
          <h3>The kittie is going away!</h3>
          <h3>Follow him!</h3>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
