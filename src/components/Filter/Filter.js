import React from "react";
import styles from './filter.module.css'

export default function Filter (props) {

  const toSearchFor = (e) => {
    props.setSearch(e.target.value);
  };

  const valMinimum = (e) => {
    props.setMinimumValue(e.target.value);
  };

  const valMaximum = (e) => {
    props.setMaximumValue(e.target.value);
  };

  const onChangeOrdination = (e) => {
    props.setOrdination(e.target.value)
  }

  return (
    <main className={styles.container} >
      <h2>Filtros</h2>
      <section>
        <div className={styles.firstColumn}>
          <div className={styles.containerInput}>
            <input type="text" placeholder="Buscar por nome" onChange={toSearchFor} value={props.search} />
          </div>
          <label className={styles.containerInput}>
            <select value={props.ordination} onChange={onChangeOrdination}>
              <option value="">Ordenação</option>
              <option value="growing">Crescente</option>
              <option value="descending">Decrescente</option>
            </select>
          </label>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.containerInput}>
            <input type="number" placeholder="R$ mínimo" onChange={valMinimum} value={props.minimumValue} />
          </div>
          <div className={styles.containerInput}>
            <input type="number" placeholder="R$ máximo" onChange={valMaximum} value={props.maximumValue} />
          </div>
        </div>
      </section>
    </main>
  );
};