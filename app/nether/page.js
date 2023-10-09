import styles from "../../styles/nether.module.css";
import Banner from "../../components/BannerNether";
import CardNether from "@/components/CardNether";
import Subtitulo from "@/components/Subtitulo";
import Titulo from "@/components/Titulo";
export default function Nether(props) {
  return (
    <>
      <div className={styles.body}>
        <section>
          <Banner data={aboutNether} />
        </section>
        <section className={styles.biomas}>
          <Titulo titulo={biomas} />
          <div className={styles.containerBiomas}>
            {biomasMC.map((bioma) => (
              <>
                <CardNether
                  key={bioma.title}
                  title={bioma.title}
                  text={bioma.text}
                  image={bioma.image}
                />
              </>
            ))}
          </div>
        </section>
        <section className={styles.biomas}>
          <Titulo titulo={mobs} />
          <div className={styles.containerBiomas}>
          {mobsMC.map((mobs) => (
              <>
                <CardNether
                  key={mobs.title}
                  title={mobs.title}
                  text={mobs.text}
                  image={mobs.image}
                />
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

const aboutNether =
  "El Nether es una dimensión en Minecraft, que se encuentra debajo del mundo normal. Es un lugar lleno de lava, fuego, criaturas hostiles y estructuras únicas.";
const biomas = "Principales Biomas";
const mobs = "Principales Mobs";
const basaltoDeltas = {
  title: "Basalto Deltas",
  text: "Un bioma volcánico, con lava que fluye libremente y estructuras de basalto.",
  image: "/Basalt_Deltas_MCD.webp",
};
const mobsMC = [
  {title: "Blaze", text: "Una criatura voladora que ataca con fuego.", image: "/blaze.jpg"},
  {title: "Ghast", text: "Una criatura voladora que lanza bolas de fuego.", image: "/ghast.jpg"},
  {title: "Magma Cube", text: "Una criatura de lava que puede explotar.", image: "/magma.jpg"},
  {title: "Piglin", text: "Una criatura humanoide que puede comerciar con el jugador.", image: "/piglin.webp"},
  {title: "Piglin Brute", text: "Una variante más poderosa del Piglin.", image: "/piglinbrute.png"},
  {title: "Wither Skeleton", text: "Una variante más poderosa del esqueleto.", image: "/witherskeleton.jpg"},
]
const biomasMC = [
  {
    title: "Basalto Deltas",
    text: "Un bioma volcánico, con lava que fluye libremente y estructuras de basalto.",
    image: "/Basalt_Deltas_MCD.webp",
  },
  {
    title: "Caves",
    text: "Un bioma de cuevas, con techos bajos y paredes de piedra abisal.",
    image: "/caves.jpg",
  },
  {
    title: "Fortresses",
    text: "Un bioma de fortalezas, con estructuras en forma de castillo hechas de ladrillos del Nether.",
    image: "/Fortresses.webp",
  },
  {
    title: "Soul Sand Valleys",
    text: "Un bioma desértico, con arena de almas y estructuras de hongos.",
    image: "/soul.jpg",
  },
  {
    title: "Crimson Forest",
    text: "Un bioma de hongos, con árboles carmesí, hongos carmesí y estructuras de hongos.",
    image: "/crimsonforest.jpg",
  },
];
