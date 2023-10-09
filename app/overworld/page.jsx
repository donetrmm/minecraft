import React from 'react'
import BannerOW from '@/components/BannerOW'
import Titulo from '@/components/Titulo'
import Presentacion from '@/components/Presentacion'
import CaracteristicasOW from '@/components/CaracteristicasOW'
import CardOW from '@/components/CardOW'
import syles from '../../styles/OWpage.module.css'
export default function page() {
  const tituloPre =  'Aqui comienza todo';
  const subtituloPre = 'Este el mundo principal o la dimensión principal de Minecraft, donde los jugadores comienzan su aventura. Es un  vasto y hermoso paisaje compuesto por una variedad de biomas, terrenos y elementos naturales que se generan aleatoriamente.'
  const imgPre =[
    { url:'https://pbs.twimg.com/media/E_RWPIlXMAQx-ZH.jpg', alt:'img', width:'600',height:'300' }
  ]
  const tituloBioma = 'Biomas'
  const biomasOW = [
    {
      src:'https://cdn.ligadegamers.com/imagenes/semillas-de-minecraft-planicie-con-aldeas-cke.jpg',alt:'img',width:'300',height:'150',titulo:'Las Llanuras',subtitulo:'Este entorno es donde encontramos muchos de los icónicos bloques de hierba, con algunas colinas bajas y solo unos pocos árboles y flores dispersas',
    },  {
      src:'https://cdn.pixabay.com/photo/2015/11/03/15/58/minecraft-1021046_1280.png',alt:'img',width:'300',height:'150',titulo:'Bioma forestal',subtitulo:'Un bioma forestal puede ser un excelente lugar para comenzar su juego de supervivencia porque, aunque es uno de los biomas más pequeños, hay abundantes suministros de madera',
    },
    {
      src:'https://tecnologiatop.club/wp-content/uploads/2021/08/Guia-de-biomas-de-Minecraft-lo-que-hace-que-cada.jpg',alt:'img',width:'300',height:'150',titulo:'Bosque Oscuro',subtitulo:'Estos crecen un dosel muy denso y permiten que muy poca luz llegue al suelo del bosque.',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164116/Swamp.png',alt:'img',width:'300',height:'150',titulo:'Pantano',subtitulo:'En los pantanos, encontrarás enredaderas que cuelgan de robles maduros, charcos poco profundos de agua estancada y hierba descolorida.',
    },  
    {
      src:'https://assets.puzzlefactory.com/puzzle/430/497/original.jpg',alt:'img',width:'300',height:'150',titulo:'Selva',subtitulo:'Aquí los árboles de secuoya altos crecen densamente, y viajar a través de la jungla o escapar de las turbas hostiles puede ser un trabajo muy duro.',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164057/mushroom-island.png',alt:'img',width:'300',height:'150',titulo:'Islas Champiñón',subtitulo:'Las Islas Champiñón son un bioma raro y único. Su superficie montañosa está hecha de micelio grisáceo, lo que les da una extraña apariencia de luna.',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164110/snowy-ice-plains.png',alt:'img',width:'300',height:'150',titulo:'Llanuras de hielo',subtitulo:'Las llanuras de hielo son en su mayoría planas y están cubiertas de hielo y nieve. Cualquier agua expuesta al aire se congelará, convirtiendo ríos y estanques en pistas de patinaje sobre hielo. ',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164042/ice-spikes-minecraft.png',alt:'img',width:'300',height:'150',titulo:'Picos de hielo',subtitulo:'El bioma de picos de las llanuras de hielo es una variación de la llanura de hielo, pero es tan espectacular que pensamos que merecía una pequeña sección propia.',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164119/Taiga.png',alt:'img',width:'300',height:'150',titulo:'Taiga',subtitulo:'El bioma de la taiga tiene mucho crecimiento denso de abetos y helechos. Los lobos y los conejos se reproducen de forma natural aquí, así que no deberías pasar hambre. Mi favorito por cierto :]',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164032/Desert.png',alt:'img',width:'300',height:'150',titulo:'Desierto',subtitulo:'El bioma del desierto, al igual que el desierto en la Tierra, es un lugar inhóspito. Debajo de los bloques de arena en el suelo, encontrarás arenisca, y solo cactus y arbustos muertos rompen la vista monótona.',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164106/Savanna.png',alt:'img',width:'300',height:'150',titulo:'Sabana',subtitulo:'La sabana es un lugar plano con solo colinas bajas y sin precipitaciones. Hay algunas acacias y mucha hierba, ocasionalmente interrumpida por un pueblo',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164025/Badlands.png',alt:'img',width:'300',height:'150',titulo:'Páramos',subtitulo:'Un Badlands es un bioma raro, pero es una fuente brillante de arcilla, que generalmente se encuentra solo en los lechos de los ríos. Este bioma es bastante nuevo en Minecraft, ya que se agregó en 1.7',
    }, 
    {
      src:'https://cdn.apexminecrafthosting.com/img/uploads/2021/08/16164100/ocean.png',alt:'img',width:'300',height:'150',titulo:'Océanos',subtitulo:'Existe el océano y el océano profundo (una variante del bioma) cubren aproximadamente el 60 % de la superficie del mundo de Minecraft. El océano puede tener hasta 15 bloques de profundidad, y puedes caminar en las aguas poco profundas, nadar o usar un bote para cruzarlo. ',
    }, 
  ]

  const tituloMobs = 'Mobs'
  const mobsOW = [
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d8/Plains_Villager_Base.png/revision/latest?cb=20190517130809',alt:'img',width:'100',height:'50',titulo:'Aldeano',subtitulo:'Los aldeanos son una criatura pasiva que vive en las aldeas. ',
    }, 
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/5/52/Wandering_Trader.png/revision/latest?cb=20201111013710',alt:'img',width:'100',height:'50',titulo:'Vendedor Ambulante',subtitulo:'El vendedor ambulante es una criatura pasiva que aparece al azar cerca del jugador. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Iron_Golem_JE2_BE2.png/revision/latest?cb=20190605101959',alt:'img',width:'100',height:'50',titulo:'Gólem de hierro',subtitulo:'El gólem de hierro (Iron Golem en inglés) es una criatura neutral que defiende a jugadores y aldeanos.',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/e/e6/Witch.png/revision/latest?cb=20201112134532',alt:'img',width:'100',height:'50',titulo:'Bruja',subtitulo:' Las brujas pueden generarse en cualquier lugar en la Superficie a un nivel de luz de 0, en grupos de 1-3. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fd/Plains_Zombie_Villager_Base.png/revision/latest?cb=20211013222051',alt:'img',width:'150',height:'50',titulo:'Adleano Zombie',subtitulo:'Un aldeano zombi es una variante del zombi que se puede curar en un aldeano normal usando una manzana dorada mientras está bajo el efecto de Debilidad. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Pillager_JE3.png/revision/latest/scale-to-width-down/700?cb=20220714205247',alt:'img',width:'150',height:'50',titulo:'Saqueador',subtitulo:'Los saqueadores son criaturas hostiles armadas con ballestas que se encuentran en bandas ambulantes o como participantes en invasiones. ',
    },   
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Lucy_Axolotl_JE2.png/revision/latest/scale-to-width-down/700?cb=20210402204139',alt:'img',width:'100',height:'50',titulo:'',subtitulo:' ',
    },
    {
      src:'',alt:'img',width:'100',height:'50',titulo:'',subtitulo:' ',
    },  
    {
      src:'',alt:'img',width:'100',height:'50',titulo:'',subtitulo:' ',
    },
    {
      src:'',alt:'img',width:'100',height:'50',titulo:'',subtitulo:' ',
    },
    {
      src:'',alt:'img',width:'100',height:'50',titulo:'',subtitulo:' ',
    },
  ]
  return (
    <main className={syles.mainOW}>
      <Presentacion tituloPre={tituloPre} subtituloPre={subtituloPre} imgPre={imgPre}/>
      
        <section className={syles.biomasOW}>
          <Titulo titulo={tituloBioma}/>
            <div className={syles.contBioma}>
              {biomasOW.map((bioma) => 
              <>
              <CardOW 
              key={bioma.alt}
              src={bioma.src}
                alt={bioma.alt}
                width={bioma.width}
                height={bioma.height}
              titulo={bioma.titulo}
              subtitulo={bioma.subtitulo}
              />

              </>
              )}
            </div>
        </section>

        <section className={syles.biomasOW}>
          <Titulo titulo={tituloMobs}/>
            <div className={syles.contBioma}>
              {mobsOW.map((mob) => 
              <>
              <CardOW 
              key={mob.alt}
              src={mob.src}
                alt={mob.alt}
                width={mob.width}
                height={mob.height}
              titulo={mob.titulo}
              subtitulo={mob.subtitulo}
              />

              </>
              )}
            </div>
        </section>
    </main>
  )
}
