import React from 'react'
import Banner from '@/components/Banner';
import Presentacion from '@/components/Presentacion';
import Card from '@/components/Card';
import styles from '../styles/home.module.css'
export default function Home() {
  const tituloBanner =  '';
  const imageBanner =[
    { url:'https://assets.stickpng.com/images/580b57fcd9996e24bc43c2f5.png', alt:'img', width:'600',height:'100' }
  ]


  const tituloPre =  'Las 3 Dimensiones de Minecraft';
  const subtituloPre = 'Minecraft es nuestro popular videojuego de construcción y aventuras que destaca por su mundo abierto y su capacidad para permitirnos a los jugadores dar rienda suelta a la creatividad. El juego se desarrolla en un vasto universo tridimensional (el mundo euclidiano) compuesto por diversas dimensiones, cada una con características únicas.'
  const imgPre =[
    { url:'https://i.pinimg.com/originals/fe/b7/05/feb70513ac088edb0c0fd62bb31d6a8f.jpg', alt:'img', width:'600',height:'300' }
  ]
  const Cards = [
    { url:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Bedrock_1.18.10.20_PatchNotes.jpg/revision/latest?cb=20211118170401', alt:'img', width:'400',height:'200' , tituloC:'Overworld', subC:'Aquí es donde los jugadores comienzan su aventura. Está lleno de biomas variados donde los jugadores pueden encontrar recursos esenciales como madera, minerales y alimentos..',link:'./overworld',textLink:'Ver mas' ,bg:'#006703'},
    { url:'https://static.wikia.nocookie.net/minecraft-computer/images/c/c1/Netherfortress.jpg/revision/latest?cb=20130326224505', alt:'img', width:'400',height:'200' , tituloC:'El Nether', subC:'Esta dimensión es un lugar infernal lleno de lava, criaturas hostiles y estructuras únicas como las fortalezas del Nether.' ,link:'./nether',textLink:'Ver mas',order2:"2",order1:"1",bg:'#73130e'},
    { url:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/The_End_-_Outer_Islands.png/revision/latest/scale-to-width-down/1920?cb=20220525222504', alt:'img', width:'400',height:'200' , tituloC:'El End', subC:'El end es una dimensión misteriosa y surrealista, que se asemeja a un plano flotante de islas. Aquí es donde los jugadores encuentran el portal hacia el Dragón del Ender.' ,link:'./end',textLink:'Ver mas',bg:"#0a0702",},
    
  ]
  
  return (
    <main className={styles.main}>
      <Banner tituloBanner={tituloBanner} imageBanner={imageBanner} />
      <Presentacion tituloPre={tituloPre} subtituloPre={subtituloPre} imgPre={imgPre} />
      <Card Cards={Cards} />
    </main>
  )
}
