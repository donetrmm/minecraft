import React from 'react'
import Titulo from './Titulo'
import Subtitulo from './Subtitulo'
import Image from 'next/image'
import styles from '../styles/OWpage.module.css'
const CardOW = (contCard) => {
  return (
       <div className={styles.card}>
            <div>
                <Titulo titulo={contCard.titulo}/>
            </div>
            <div>
                <Image 
                src={contCard.src}
                alt={contCard.alt}
                width={contCard.width}
                height={contCard.height}
                className={styles.imgCardow}
                />
            </div>
            <div>
                <Subtitulo subtitulo={contCard.subtitulo}/>
            </div>
      </div>
  );
};

export default CardOW;