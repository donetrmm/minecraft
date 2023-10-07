import React from 'react'
import Titulo from './Titulo'
import ImageInd from './ImageInd';
import styles from '../styles/home.module.css';
export default function Presentacion({tituloPre,imgPre}) {
    const titulo = tituloPre;
    const images = imgPre
  return (
    <article className={styles.}>
    <section className={styles.}>
        <Titulo titulo={titulo} />
    </section>
    <section className={styles.}>
        <ImageInd images={images}/>
    </section>
</article>
  )
}
