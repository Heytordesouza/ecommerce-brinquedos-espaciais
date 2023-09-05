import React from "react";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import AppContext from '../components/AppContext'
import Filter from '../components/Filter/Filter';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import products from "../components/Products/products"
import styles from '../styles/homepage.module.css'
import cartImg from "../../public/img/carrinho-icon.png"

export default function HomePage() {

  const context = useContext(AppContext);
  
  const {
    consultItem, 
    onAdd
  } = context;

  const [search, setSearch] = useState("");
  const [ordination, setOrdination] = useState("");
  const [minimumValue, setMinimumValue] = useState("");
  const [maximumValue, setMaximumValue] = useState("");

  useEffect(() => {
    consultItem();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Filter
          search={search}
          setSearch={setSearch}
          minimumValue={minimumValue}
          setMinimumValue={setMinimumValue}
          maximumValue={maximumValue}
          setMaximumValue={setMaximumValue}
          ordination={ordination}
          setOrdination={setOrdination} />
        <section className={styles.section}>
          {products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
          })
            .filter((product) => {
              return minimumValue ? minimumValue <= product.value : product;
            })
            .filter((product) => {
              return maximumValue ? maximumValue >= product.value : product;
            })
            .sort((a, b) => {
              if (ordination === "growing") {
                if (a.value < b.value) {
                  return -1;
                } else {
                  return 1;
                }
              } else if (ordination === "descending") {
                if (a.value < b.value) {
                  return 1;
                } else {
                  return -1;
                }
              }
            })
            .map((product) => {
              return (
                <div className={styles.cards} key={product.id}>
                  <Image className={styles.imageProduct} priority={true} src={product.imageUrl} alt="imageproduto" />
                  <div className={styles.name}>{product.name}</div>
                  <div className={styles.endCard}>
                    <div className={styles.value}>R$ {product.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</div>
                    <button className={styles.buttonAdd} onClick={() => onAdd(product)}>
                      <Image
                        className={styles.iconCart}
                        src={cartImg}
                        alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
        </section>
      </main>
      <Footer />
    </>
  );
}