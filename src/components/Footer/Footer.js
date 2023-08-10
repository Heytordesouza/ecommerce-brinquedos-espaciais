import React from "react";
import Image from "next/image";
import styles from './footer.module.css'
import GitHub from "../../../public/img/GitHub.jpg"
import LinKedin from "../../../public/img/Linkedin.jpeg"
import logo from "../../../public/img/logo.png"
import linha from "../../../public/img/linha.png"

export default function Footer() {

  return (
    <main className={styles.container}>
      <section className={styles.firstColumn}>
        <Image priority={true} className={styles.logo} src={logo} alt="logo" />
        <span className={styles.name}>
          <div className={styles.created}>Criado por:</div>
          <div className={styles.createdName}>Heytor de Souza</div>
        </span>
      </section>
      <section className={styles.secondColumn}>Social:</section>
      <section className={styles.thirdColumn}>
        <a className={styles.imgSocial} href="https://github.com/Heytordesouza" target="_blank">
          <Image className={styles.linha} src={linha} alt="linha" />
          <Image className={styles.img} src={GitHub} alt="GitHub" />
        </a>
        <a className={styles.imgSocial} href="https://www.linkedin.com/in/heytor-de-souza" target="_blank">
          <Image className={styles.linha} src={linha} alt="linha" />
          <Image className={styles.img} src={LinKedin} alt="LinKedin" />
        </a>
      </section>
    </main>
  );
};