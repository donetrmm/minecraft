import styles from "../styles/banner.module.css";
export default function Banner(props) {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.overlay}></div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerText}>
            El Nether es una dimensión en Minecraft, que se encuentra debajo del
            mundo normal. Es un lugar lleno de lava, fuego, criaturas hostiles y
            estructuras únicas.
          </h1>
        </div>
      </section>
    </>
  );
}
