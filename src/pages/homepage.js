import React from "react";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import AppContext from '../components/AppContext'
import Filtros from '../components/Filtros/Filtros';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import produtos from "../components/Produtos/produtos"
import styles from '../styles/homepage.module.css'
import carrinhoImg from "../../public/img/carrinho-icon.png"

export default function HomePage() {

  const context = useContext(AppContext);
  const {
    consultarItem, onAdd
  } = context;

  const [buscar, setBuscar] = useState("");
  const [ordenacao, setOrdenacao] = useState("");
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");

  useEffect(() => {
    consultarItem();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Filtros
          buscar={buscar}
          setBuscar={setBuscar}
          valorMinimo={valorMinimo}
          setValorMinimo={setValorMinimo}
          valorMaximo={valorMaximo}
          setValorMaximo={setValorMaximo}
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao} />
        <section className={styles.section}>
          {produtos.filter((produto) => {
            return produto.nome.toLowerCase().includes(buscar.toLowerCase());
          })
            .filter((produto) => {
              return valorMinimo ? valorMinimo <= produto.valor : produto;
            })
            .filter((produto) => {
              return valorMaximo ? valorMaximo >= produto.valor : produto;
            })
            .sort((a, b) => {
              if (ordenacao === "crescente") {
                if (a.valor < b.valor) {
                  return -1;
                } else {
                  return 1;
                }
              } else if (ordenacao === "decrescente") {
                if (a.valor < b.valor) {
                  return 1;
                } else {
                  return -1;
                }
              }
            })
            .map((product) => {
              return (
                <div className={styles.cards} key={product.id}>
                  <Image className={styles.imagemProduto} priority={true} src={product.imagemUrl} alt="imageproduto" />
                  <div className={styles.nome}>{product.nome}</div>
                  <div className={styles.endCard}>
                    <div className={styles.value}>R$ {product.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</div>
                    <button className={styles.button} onClick={() => onAdd(product)}>
                      <Image
                        className={styles.iconCart}
                        src={carrinhoImg}
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