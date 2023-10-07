import React from 'react'
import Banner from '@/components/Banner';
import styles from '../styles/home.module.css'
export default function Home() {
  const tituloBanner =  '';
  const imageBanner =[
    { url:'https://assets.stickpng.com/images/580b57fcd9996e24bc43c2f5.png', alt:'img', width:'600',height:'100' }
  ]

  const tituloPre =  'Las 3 Dimensiones de Minecraft';
  const imgPre =[
    { url:'https://assets.stickpng.com/images/580b57fcd9996e24bc43c2f5.png', alt:'img', width:'600',height:'100' }
  ]
  return (
    <main className={styles.main}>
      <Banner tituloBanner={tituloBanner} imageBanner={imageBanner} />
    </main>
  )
}
