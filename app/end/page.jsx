import React from 'react';
import styles from '@/styles/end.module.css';
import EndMobCard from '@/components/EndMobCard';

const mobsData = [
  {
    name: 'Enderman',
    image: 'https://www.freepngimg.com/thumb/minecraft/5-2-minecraft-enderman-png-thumb.png',
    description: 'El Enderman es un monstruo poco común de estatura alta, delgada y de color negro con ojos rosados. Es originario de de la dimensión del End, puede teletransportarse y agarrar una serie de bloques.'
  },
  {
    name: 'Shulker',
    image: 'https://cdn.staticneo.com/w/minecraft/Shulker.png',
    description: 'Los shulkers son criaturas hostiles con forma de caja que se encuentran en las ciudades del End. Se esconden en su caparazón para mimetizarse con los bloques de purpur circundantes y vigilan los distintos tesoros de la ciudad. Son la única fuente de caparazón de shulker, que se utiliza para fabricar caja de shulker.'
  },
  {
    name: 'Endermite',
    image: 'https://www.tynker.com/minecraft/mobs/json/previews/endermite.png',
    description: 'Los endermitas son mobs agregados en la Actualización 1.8 . No se sabe nada más sobre ellos, excepto que los Endermen los atacan. Esto indica que posiblemente sean parásitos de Endermen .'
  },
  {
    name: 'Ender Dragon',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a82f3ce5-79b8-415a-9dd0-2e4c305efac8/dd6xsii-b2e106b2-4a46-4fe7-9d7b-be2edfaa0f32.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MmYzY2U1LTc5YjgtNDE1YS05ZGQwLTJlNGMzMDVlZmFjOFwvZGQ2eHNpaS1iMmUxMDZiMi00YTQ2LTRmZTctOWQ3Yi1iZTJlZGZhYTBmMzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OUPYqHmFH210OJKw3aJ_eonqGf3DvSQgEAWDzHc4PSE',
    description: 'El Ender Dragon es el primer jefe de Minecraft . Tiene 200 de salud. Aparece en el Fin, y derrotarlo es la única forma de salir del Fin, además de morir. El Dragón Ender puede volar, tiene ojos morados brillantes, aparece con muchos Endermen , no puede teletransportarse y es extremadamente peligroso.'
  },

];

const Page = () => {
  return (
    <div className={styles.endPageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img src="https://i.imgur.com/VzUHB0d.png" alt="End City" />
        </div>
        <div className={styles.textContainer}>
          <h2>¿Qué es la End City?</h2>
          <p>
            Las End Cities de Minecraft son grandes estructuras que solo aparecen en The End, específicamente en las Islas Exteriores. Para llegar a las islas exteriores, debes derrotar al Ender Dragon, después de lo cual aparecerá un portal End Gateway que te llevará allí. Luego podrás buscar en las islas una Ciudad Final.
          </p>
        </div>
      </div>

      <div className={styles.mobCardsContainer}>

        {mobsData.map((mob, index) => (
          <EndMobCard
            key={index}
            name={mob.name}
            image={mob.image}
            description={mob.description}
          />
        ))}
              {/* Div con información de "¿Cómo llegar?" */}
              <div className={`${styles.howToGetContainer} ${styles.marginTop20} ${styles.marginBottom20} ${styles.marginLR20}`}>
        <h2>¿Cómo llegar?</h2>
        <br></br>
        <p>
        Para acceder al End, el jugador debe encontrar y activar el portal del End, el cual se encuentra en una fortaleza.

El jugador tendrá que conseguir 12 perlas de ender matando endermans o intercambiando con los piglins o aldeanos después, usando polvo de blaze, convertirlas en ojos de ender. Se pueden utilizar estos ojos de ender para localizar una fortaleza lanzándolos en el aire y siguiendo la dirección en que vayan volando. Se advierte al jugador de crear varios ojos de ender, esto debido a que ocasionalmente se desvanecen al lanzarlos o se destruyen. Para activar el portal, hay que insertar un ojo de ender en cada uno de los huecos del marco del portal del End, 12 en total.
          
        </p>
        <div className={`${styles.centeredImage} ${styles.smallerImage} `}>
          <img src="https://i.blogs.es/778720/portal-de-end-minecraft/450_1000.jpeg" alt="portal" />
        </div>
      </div>
    </div>
                  {/* Div con "El mejor item del end" */}
                  <div className={styles.bestItemContainer}>
        <div className={styles.bestItemDescription}>
          <h2>El mejor item del end</h2>
          <br></br>
          <p>Los élitros (Elytra en inglés) son unas alas que le permiten al jugador planear.</p>
          <br></br>
          <p>Los élitros solo se puede encontrar en las ciudades del End en un marco en la sala del tesoro del barco del End. Un shulker guarda el élitros y los dos cofres de botín del barco.</p>
        </div>
        <div className={styles.bestItemImage}>
          <img src="https://lh3.bunny.novaskin.me/wcaRKZU-auCjYWyOOqVQm_ugQCUIwm28G1WUmBj44kM9PBGJlq_61Hy09hKWa4aB3BJlLNTVGf3TKkCPyN-yFfM" alt="Elytras" />
        </div>
      </div>
    </div>
  );
}

export default Page;

