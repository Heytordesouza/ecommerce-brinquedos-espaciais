import AppContext from '../components/AppContext';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import {toast} from 'react-toastify'
import '../styles/global.css'

import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('Produto adicionado ao carrinho', {
      autoClose: 1500,
    });
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
      <ToastContainer />
      <AppContext.Provider value={{ cartItems, setCartItems, onAdd, consultarItem }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}
