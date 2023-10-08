import React from 'react'
import BannerOW from '@/components/BannerOW'
import Presentacion from '@/components/Presentacion'
import syles from '../../styles/'
export default function page() {
  const tituloPre =  'Aqui comienza todo';
  const subtituloPre = 'Minecraft es nuestro popular videojuego de construcción y aventuras que destaca por su mundo abierto y su capacidad para permitirnos a los jugadores dar rienda suelta a la creatividad. El juego se desarrolla en un vasto universo tridimensional (el mundo euclidiano) compuesto por diversas dimensiones, cada una con características únicas.'
  const imgPre =[
    { url:'https://pbs.twimg.com/media/E_RWPIlXMAQx-ZH.jpg', alt:'img', width:'600',height:'300' }
  ]
  return (
    <main>
      <Presentacion tituloPre={tituloPre} subtituloPre={subtituloPre} imgPre={imgPre}/>
    </main>
  )
}
