import AppContext from '../components/AppContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'
import '../styles/global.css'

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  const [cartItems, setCartItems] = useState([]);
  const [seachCep, setSeachCep] = useState(true)
  const { register, handleSubmit, setValue } = useForm();

  const onAdd = (product) => {
    const newCart = [...cartItems]

    const newProduct = newCart.find((newItem) => newItem.id === product.id)
    if (!newProduct) {
      const productNew = { ...product, qtd: 1 }
      newCart.push(productNew)
    } else {
      newProduct.qtd++
    }
    const turnString = JSON.stringify(newCart)
    localStorage.setItem("local", turnString)
    setCartItems(newCart)
    toast.success('Produto adicionado ao carrinho', {
      autoClose: 1500,
    });
  }

  const consultItem = () => {
    if (localStorage.getItem("local")) {
      const storeItem = localStorage.getItem("local")
      const getString = JSON.parse(storeItem);
      setCartItems(getString)
    }
  }

  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.qtd * c.value
  }, 0);

  const totalPrice = itemsPrice;

  const countCartItems = cartItems.reduce((a, c) => {
    return a + c.qtd
  }, 0);

  return (
    <>
      <ToastContainer />
      <AppContext.Provider
        value={{
          cartItems,
          setCartItems,
          seachCep,
          setSeachCep,
          register,
          handleSubmit,
          setValue,
          onAdd,
          itemsPrice,
          totalPrice,
          countCartItems,
          consultItem
        }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}
