import React from 'react'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
export default function Nav({linksNav}) {
  return (
    <>
        <nav  className={styles.nav}>
        {linksNav.map((link) => (
    
            <Link href={link.url} className={styles.linkNav} key={link.id}>{link.text}</Link>
      
      ))}
        </nav>
    </>
  )
}
