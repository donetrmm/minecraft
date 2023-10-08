import styles from "../../styles/nether.module.css";
import Banner from "../../components/BannerNether";
import CardNether from "@/components/CardNether";
import Subtitulo from "@/components/Subtitulo";
import Titulo from "@/components/Titulo";
export default function Nether(props) {
  return (
    <>
      <body className={styles.body}>
        <section>
          <Banner data={aboutNether} />
        </section>
        <section className={styles.biomas}>
          <Titulo titulo={biomas} />
          <div className={styles.containerBiomas}>
            {biomasMC.map((basaltoDeltas) => (
              <>
                <CardNether
                  key={basaltoDeltas.title}
                  title={basaltoDeltas.title}
                  text={basaltoDeltas.text}
                  image={basaltoDeltas.image}
                />
              </>
            ))}
          </div>
        </section>
      </body>
    </>
  );
}

const aboutNether =
  "El Nether es una dimensión en Minecraft, que se encuentra debajo del mundo normal. Es un lugar lleno de lava, fuego, criaturas hostiles y estructuras únicas.";
const biomas = "Principales Biomas";
const basaltoDeltas = {
  title: "Basalto Deltas",
  text: "Un bioma volcánico, con lava que fluye libremente y estructuras de basalto.",
  image: "/Basalt_Deltas_MCD.webp",
};
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
];
