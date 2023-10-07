import React from 'react'
import Banner from '@/components/Banner';
import Presentacion from '@/components/Presentacion';
import styles from '../styles/home.module.css'
export default function Home() {
  const tituloBanner =  '';
  const imageBanner =[
    { url:'https://assets.stickpng.com/images/580b57fcd9996e24bc43c2f5.png', alt:'img', width:'600',height:'100' }
  ]

  const tituloPre =  'Las 3 Dimensiones de Minecraft';
  const subtituloPre = 'alsldalsflaslalsflalsflaflalfla'
  const imgPre =[
    { url:'https://i.pinimg.com/originals/fe/b7/05/feb70513ac088edb0c0fd62bb31d6a8f.jpg', alt:'img', width:'600',height:'300' }
  ]
  return (
    <main className={styles.main}>
      <Banner tituloBanner={tituloBanner} imageBanner={imageBanner} />
      <Presentacion tituloPre={tituloPre} subtituloPre={subtituloPre} imgPre={imgPre} />
    </main>
  )
}
