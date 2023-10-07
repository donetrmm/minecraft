import React from 'react'
import Titulo from './Titulo'
import ImageInd from './ImageInd';
import Subtitulo from './Subtitulo';
import styles from '../styles/home.module.css';
export default function Presentacion({tituloPre,subtituloPre,imgPre}) {
    const titulo = tituloPre;
    const images = imgPre;
    const subtitulo = subtituloPre;
  return (
    <article >
    <section  >
        <Titulo titulo={titulo} />
        <Subtitulo subtitulo={subtitulo} />
    </section>
    <section >
        <ImageInd images={images}/>
    </section>
</article>
  )
}
