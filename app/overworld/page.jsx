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
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Lucy_Axolotl_JE2.png/revision/latest/scale-to-width-down/700?cb=20210402204139',alt:'img',width:'150',height:'50',titulo:'Ajolote',subtitulo:'El  ajolote es una criatura pasiva encontrada en el bioma de cuevas frondosas que puede transportarse en cubos con agua y ataca a algunas criaturas marinas. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1e/Brown_Horse.png/revision/latest/scale-to-width-down/700?cb=20190716121731',alt:'img',width:'150',height:'50',titulo:'Caballo',subtitulo:'Los caballos son criaturas domesticables que pueden servir para la exploración, las variantes pueden aparecer en uno de varios colores de piel diferentes que exhiben manchas o rasgos diferentes. ',
    },  
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1a/Pig_JE3_BE2.png/revision/latest/scale-to-width-down/699?cb=20230111235817',alt:'img',width:'150',height:'50',titulo:'Cerdo',subtitulo:' Un cerdo es una criatura pasiva que se encuentra comúnmente en la mayoría de los biomas de hierba.',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/8/8c/Gato_Tabby.png/revision/latest?cb=20180711175643',alt:'img',width:'150',height:'50',titulo:'Gato',subtitulo:'Los Gatos son mobs pacíficos domesticables, el gato de hoy más moderno en Minecraft salio en la 1.14.  ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Wolf_JE2_BE2.png/revision/latest/scale-to-width-down/700?cb=20200531094035',alt:'img',width:'150',height:'50',titulo:'Lobo',subtitulo:'Los lobos son criaturas neutrales, se cree que no cambiaron mucho desde sus inicios siendo casi un fósil viviente introducidas en la versión 1.1.1 ',
    }, 
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/White_Sheep_JE3_BE6.png/revision/latest/scale-to-width-down/699?cb=20190809163123',alt:'img',width:'150',height:'50',titulo:'Oveja',subtitulo:'Las ovejas son criaturas pasivas comunes que suministran lana y cordero crudo y se encuentran en muchos biomas. ',
    },  
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2c/Chicken_JE2_BE2.png/revision/latest?cb=20190721103652',alt:'img',width:'150',height:'50',titulo:'Pollo',subtitulo:'Los pollos (también llamadas gallinas) son criaturas pasivas que suministran plumas, pollo crudo, huevos, e incluso pollo asado. ',
    },  
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/8/84/Cow.png/revision/latest?cb=20201112133105',alt:'img',width:'150',height:'50',titulo:'Vaca',subtitulo:'Una vaca es una criatura pasiva que se encuentra en la mayoría de los biomas con césped y una fuente de cuero, filete y leche. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d8/Salmon.gif/revision/latest?cb=20190923182046',alt:'img',width:'150',height:'50',titulo:'Salmon',subtitulo:'Los salmones son criaturas pasivas comunes que se encuentran en los océanos y en los ríos. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/Cod.gif/revision/latest?cb=20190924091509',alt:'img',width:'150',height:'50',titulo:'Bacalao',subtitulo:' El bacalao es una criatura pasiva bastante común encontrada en la Superficie, en varios biomas de océano. ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/a5/Panda_juguet%C3%B3n_sent%C3%A1ndose.png/revision/latest?cb=20200804161354',alt:'img',width:'150',height:'50',titulo:'El panda',subtitulo:' Los pandas aparecen en grupos de 1 o 2 en bloques con césped en la jungla con un espacio mínimo de dos bloques de altura ( El Panda Emi )',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/7/78/Polar_Bear.png/revision/latest?cb=20171009151949',alt:'img',width:'150',height:'50',titulo:'Oso Polar (el panda blanco)',subtitulo:'Los osos polares (Polar Bear en inglés) son criaturas neutrales que viven en biomas fríos.',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1f/Spider_JE4_BE3.png/revision/latest/scale-to-width-down/700?cb=20200108012105',alt:'img',width:'150',height:'50',titulo:'Araña',subtitulo:'La araña es la tercera criatura añadida al juego. Sus ojos brillan de color rojo en la oscuridad, dándoles una apariencia tétrica ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/4/46/Enderman-con-bloque.png/revision/latest?cb=20121015100421',alt:'img',width:'150',height:'50',titulo:'Enderman',subtitulo:'El Enderman es un monstruo poco común de estatura alta, delgada y de color negro con ojos rosados.  ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/Zombie_JE3_BE2.png/revision/latest?cb=20191227070025',alt:'img',width:'150',height:'50',titulo:'Zombie',subtitulo:' El zombi (Zombie en inglés) es una criatura hostil común y no muerta.',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b6/Skeleton_Aiming_JE2_BE3.png/revision/latest/scale-to-width-down/565?cb=20191103010055',alt:'img',width:'150',height:'50',titulo:'Esqueleto',subtitulo:'El esqueleto (Skeleton en inglés) es una criatura hostil común y no muerta que va equipada con un arco y flechas. La Calaca Chida ',
    },
    {
      src:'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/b/b2/Creeper1.png/revision/latest?cb=20210923172737',alt:'img',width:'150',height:'50',titulo:'Creeper',subtitulo:'El creeper es una criatura hostil común que se acerca sigilosamente al jugador y explota, destruyendo el entorno y dañando tanto al jugador como a otras criaturas dentro del radio. Te odio cada que respires ',
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
