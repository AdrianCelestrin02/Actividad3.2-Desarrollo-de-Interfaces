import { useState } from 'react'
import Cabecera from './Cabecera'
import InfoArtista from './InfoArtista'
import BarraInicial from './BarraInicial'
import Reproductor from './Reproductor'
import SeccionRadio from './SeccionRadio'
import Emojis from './Emojis'
import Nav from './Nav'
import './App.css'

function App() {
  

  return (
    <>
    <Cabecera/>
    <BarraInicial/>
    <InfoArtista/>
    <Reproductor/>
    <SeccionRadio/>
    <Emojis/>
    <Nav/>
      
    </>
  )
}

export default App
