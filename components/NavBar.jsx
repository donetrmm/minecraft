import React from 'react'
import Nav from '@/components/Nav'
import styles from '../styles/home.module.css'
import Link from 'next/link'
export default function NavBar({tittuloNav,linksNav}) {
  return (
    <header className={styles.header}>
        <Link href='/'>
        <h1 className={styles.tituloNav} >
        {tittuloNav}
        </h1>
        </Link>
       
       
       <Nav linksNav={linksNav} />
    </header>
  )
}
