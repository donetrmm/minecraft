
import React from 'react'
import Titulo from './Titulo'
import ImageInd from './ImageInd';
import styles from '../styles/home.module.css';
export default function Banner({tituloBanner,imageBanner}) {
    const titulo = tituloBanner;
    const images = imageBanner
  return (
    <article className={styles.banner}>
        <section className={styles.bannerTitulo}>
            <Titulo titulo={titulo} />
        </section>
        <section className={styles.bannerContImg}>
            <ImageInd images={images}/>
        </section>
    </article>
  )
}
