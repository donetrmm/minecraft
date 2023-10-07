
import React from 'react'
import Image from 'next/image'
import styles from '../styles/home.module.css'
export default function ImageInd({images}) {
  return (
    <>
        {images.map((img)=>(
            <Image key={img.alt}
            src={img.url}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className={styles.imgInd}
            />
        ))}
    </>
  )
}
