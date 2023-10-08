import React from 'react'
import Titulo from './Titulo'
import ImageInd from './ImageInd';
import Subtitulo from './Subtitulo';
import Image from 'next/image';
import styles from '../styles/home.module.css';
export default function Presentacion({tituloPre,subtituloPre,imgPre}) {
    const titulo = tituloPre;
    const subtitulo = subtituloPre;
  return (
    <article className={styles.presentacion}>
    <section  style={{ order: 1 }} className={styles.textPre}>
        <Titulo titulo={titulo} />
        <Subtitulo subtitulo={subtitulo} />
    </section>
    <section className={styles.contImgPre} style={{ order: 2 }}>
    {imgPre.map((img)=>(
            <Image key={img.alt}
            src={img.url}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className={styles.imgPre}
            />
        ))}
    </section>
</article>
  )
}
