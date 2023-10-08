"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.css'
export default function Card({Cards}) {

  return (
    <section>
        {Cards.map((card) =>(
        <div key={card.alt} className={styles.card}> 
            <div className={styles.cardImg} style={{order : card.order2,
             '@media (max-width: 620px)': {
                order: "1",
              },
            }}> 
            <Image 
                src={card.url}
                alt={card.alt}
                width={card.width}
                height={card.height}
            />
            </div>
            <div className={styles.cardBody} style={{order : card.order1,
             '@media (max-width: 620px)': {
                order: "2",
              },
            }}>
                <h3 >{card.tituloC}</h3>
                <p >{card.subC}</p>
                <Link href={card.link}>
                {card.textLink}
                </Link>
            </div>
        
         
        </div>
     ))}
    </section>
  )
}
