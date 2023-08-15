import React from "react";
import styles from './filtros.module.css'

export default function Filtros (props) {

  const pesquisar = (e) => {
    props.setBuscar(e.target.value);
  };

  const valMinimo = (e) => {
    props.setValorMinimo(e.target.value);
  };

  const valMaximo = (e) => {
    props.setValorMaximo(e.target.value);
  };

  const onChangeOrdenacao = (e) => {
    props.setOrdenacao(e.target.value)
  }

  return (
    <main className={styles.container} >
      <h2 className={styles.title}>Filtros</h2>
      <div className={styles.section}>
        <div className={styles.primeiraColuna}>
          <div className={styles.containerInput}>
            <input className={styles.input} type="text" placeholder="Buscar por nome" onChange={pesquisar} value={props.buscar} />
          </div>
          <label className={styles.containerInput}>
            <select className={styles.select} value={props.ordenacao} onChange={onChangeOrdenacao}>
              <option value="">Ordenação</option>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </label>
        </div>
        <div className={styles.segundaColuna}>
          <div className={styles.containerInput}>
            <input className={styles.input} type="number" placeholder="R$ mínimo" onChange={valMinimo} value={props.valorMinimo} />
          </div>
          <div className={styles.containerInput}>
            <input className={styles.input} type="number" placeholder="R$ máximo" onChange={valMaximo} value={props.valorMaximo} />
          </div>
        </div>
      </div>
    </main>
  );
};