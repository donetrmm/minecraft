"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.css'
export default function Card({Cards}) {

  return (
    <section>
        {Cards.map((card) =>(
        <div key={card.alt} className={styles.card} style={{backgroundColor:card.bg,}}> 
            <div className={styles.cardImg} style={{order : card.order2,
             '@media (max-width: 620px)': {
                order: card.order1,
              },
            }}> 
            <Image 
                src={card.url}
                alt={card.alt}
                width={card.width}
                height={card.height}
                className={styles.imgcard}
            />
            </div>
            <div className={styles.cardBody} style={{order : card.order1, 
             '@media (max-width: 620px)': {
                order: card.order2,
              },
            }}>
                <h3 style={{
                    color:card.color,
                    textShadow:card.ts,
                }}>{card.tituloC}</h3>
                <p >{card.subC}</p>
                <div className={styles.linkCard}>
                <Link href={card.link} className={styles.link}>
                {card.textLink}
                </Link>
                </div>
              
            </div>
        
         
        </div>
     ))}
    </section>
  )
}
