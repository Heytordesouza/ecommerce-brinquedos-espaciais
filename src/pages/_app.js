import AppContext from '../components/AppContext';
import { useState } from 'react';
import './global.css'

export default function App({ Component, pageProps }) {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const novoCarrinho = [...cartItems]

    const produtoNovo = novoCarrinho.find((novoItem) => novoItem.id === product.id)
    if (!produtoNovo) {
      const novoProduto = { ...product, qtd: 1 }
      novoCarrinho.push(novoProduto)
    } else {
      produtoNovo.qtd++
    }
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCartItems(novoCarrinho)
  }

  const consultarItem = () => {
    if (localStorage.getItem("local")) {
      const armazenarItem = localStorage.getItem("local")
      const pegarString = JSON.parse(armazenarItem);
      setCartItems(pegarString)
    }
  }

  return (
    <>
      <AppContext.Provider value={{ cartItems, setCartItems, onAdd, consultarItem }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}
