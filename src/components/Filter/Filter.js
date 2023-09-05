import React from "react";
import styles from './filter.module.css'

export default function Filter(props) {

  const { search,
    setSearch,
    ordination,
    setOrdination,
    minimumValue,
    setMinimumValue,
    maximumValue,
    setMaximumValue } = props

  return (
    <main className={styles.container} >
      <h2>Filtros</h2>
      <section>
        <div className={styles.firstColumn}>
          <div className={styles.containerInput}>
            <input
              type="text"
              placeholder="Buscar por nome"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <label className={styles.containerInput}>
            <select value={ordination} onChange={(e) => setOrdination(e.target.value)}>
              <option value="">Ordenação</option>
              <option value="growing">Crescente</option>
              <option value="descending">Decrescente</option>
            </select>
          </label>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.containerInput}>
            <input
              type="number"
              placeholder="R$ mínimo"
              onChange={(e) => setMinimumValue(e.target.value)}
              value={minimumValue}
            />
          </div>
          <div className={styles.containerInput}>
            <input
              type="number"
              placeholder="R$ máximo"
              onChange={(e) => setMaximumValue(e.target.value)}
              value={maximumValue}
            />
          </div>
        </div>
      </section>
    </main>
  );
};