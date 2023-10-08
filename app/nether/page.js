import styles from "../../styles/nether.module.css";
import Banner from "../../components/BannerNether";
export default function Nether(props) {
  return (
    <>
        <Banner data={aboutNether} />
    </>
  );
}

const aboutNether = "El Nether es una dimensión en Minecraft, que se encuentra debajo del mundo normal. Es un lugar lleno de lava, fuego, criaturas hostiles y estructuras únicas."
