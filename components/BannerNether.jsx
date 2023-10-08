import styles from "../styles/bannerNether.module.css";
export default function Banner(data) {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.overlay}></div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerText}>
            {data.data}
          </h1>
        </div>
      </section>
    </>
  );
}