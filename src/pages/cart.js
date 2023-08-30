import { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import Image from "next/image";
import Link from "next/link";
import AppContext from '../components/AppContext'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import styles from '../styles/cart.module.css'
import imgCart from "../../public/img/carrinho-icon.png"
import imgBin from "../../public/img/lixeira.png"
import Freight from '../components/Freight/Freight'
import Payment from '../components/Payment/Payment'

export default function Cart() {
    const context = useContext(AppContext)

    const {
        cartItems,
        setCartItems,
        consultItem,
        countCartItems
    } = context

    const onRemove = (itemCart) => {
        const newCart = [...cartItems]

        const newProduct = newCart.find(
            (newItem) => newItem.id === itemCart.id
        )
        if (newProduct.qtd > 1) {
            newProduct.qtd--
        }
        const turnString = JSON.stringify(newCart)
        localStorage.setItem("local", turnString)
        setCartItems(newCart)
    }

    const onAdicionar = (itemCart) => {
        const newCart = [...cartItems]

        const newProduct = newCart.find(
            (newItem) => newItem.id === itemCart.id
        )
        if (newProduct.qtd >= 1) {
            newProduct.qtd++
        }

        const turnString = JSON.stringify(newCart)
        localStorage.setItem("local", turnString)
        setCartItems(newCart)
    }

    const onRemoveTotal = (itemCart) => {

        const filterDelete = cartItems.filter((item) => item.id !== itemCart.id)

        const turnString = JSON.stringify(filterDelete)
        localStorage.setItem("local", turnString)
        setCartItems(filterDelete)

        toast.success('Produto apagado do carrinho', {
            icon: "🗑️",
            autoClose: 1500,
        });
    }

    useEffect(() => {
        consultItem()
    }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.firstColumn}>
                    <h2 className={styles.title}>
                        <Image className={styles.cartImg} src={imgCart} alt="cartImg" />
                        Carrinho:
                    </h2>
                    <span className={styles.qtdTotal}>Quantidade de itens: {countCartItems}</span>
                    {cartItems.map((itemCart) => {
                        return (
                            <div className={styles.product} key={itemCart.id}>
                                <div className={styles.firstLine} >
                                    <div className={styles.buttons}>
                                        {itemCart.qtd === 1 ?
                                            <button className={styles.minusButton} onClick={() => onRemoveTotal(itemCart)}>-</button>
                                            :
                                            <button className={styles.minusButton} onClick={() => onRemove(itemCart)}>-</button>
                                        }
                                        <div className={styles.qtd} >{itemCart.qtd}x</div>
                                        <button className={styles.moreButton} onClick={() => onAdicionar(itemCart)}>+</button>
                                    </div>
                                    <div className={styles.value}>
                                        <div className={styles.valueSingle} >R$ {itemCart.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })} cada</div>
                                        <div className={styles.valueTotal}>R${(itemCart.value * itemCart.qtd).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</div>
                                    </div>
                                </div>
                                <Image className={styles.imgProduct} src={itemCart.imageUrl} alt="imageProduct" />
                                <div className={styles.name}>{itemCart.name}</div>
                                <div className={styles.buttonRemove} onClick={() => onRemoveTotal(itemCart)}>
                                    <Image className={styles.bin} src={imgBin} alt="bin" />
                                </div>
                            </div>
                        )
                    })}

                    <button className={styles.buttonHome}>
                        <Link className={styles.linkHome} href='/'>Continuar comprando</Link>
                    </button>

                </section>
                <section className={styles.secondColumn}>
                    <Freight />
                    <Payment />
                </section>
            </main>
            <Footer />
        </>
    );
};