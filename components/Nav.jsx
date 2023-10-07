import React from 'react'
import styles from '../styles/home.module.css'
import Link from 'next/link'
export default function Nav({linksNav}) {
  return (
    <>
        {linksNav.map((link) => (
        <nav key={link.id} className={styles.nav}>
            <Link href={link.url} className={styles.linkNav}>{link.text}</Link>
        </nav>
      ))}
    </>
  )
}
