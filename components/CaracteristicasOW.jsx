import React from 'react'
import Titulo from './Titulo'
export default function CaracteristicasOW({tituloBioma}) {
    const titulo = tituloBioma;
  return (
    <article>
        <section>
            <Titulo titulo={titulo}/>
        </section>
   
    </article>
  )
}
