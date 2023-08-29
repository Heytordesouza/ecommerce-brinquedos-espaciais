import { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import Image from "next/image";
import Link from "next/link";
import AppContext from '../components/AppContext'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import styles from '../styles/carrinho.module.css'
import carrinhoImg from "../../public/img/carrinho-icon.png"
import lixeira from "../../public/img/lixeira.png"
import Frete from '../components/Frete/Frete'
import Payment from '../components/Payment/Payment'

export default function Carrinho() {
    const context = useContext(AppContext)

    const {
        cartItems,
        setCartItems,
        consultItem,
        countCartItems
    } = context

    const onRemove = (itemCarrinho) => {
        const novoCarrinho = [...cartItems]

        const produtoNovo = novoCarrinho.find(
            (novoItem) => novoItem.id === itemCarrinho.id
        )
        if (produtoNovo.qtd > 1) {
            produtoNovo.qtd--
        }
        const virarString = JSON.stringify(novoCarrinho)
        localStorage.setItem("local", virarString)
        setCartItems(novoCarrinho)
    }

    const onAdicionar = (itemCarrinho) => {
        const novoCarrinho = [...cartItems]

        const produtoNovo = novoCarrinho.find(
            (novoItem) => novoItem.id === itemCarrinho.id
        )
        if (produtoNovo.qtd >= 1) {
            produtoNovo.qtd++
        }
        const virarString = JSON.stringify(novoCarrinho)
        localStorage.setItem("local", virarString)
        setCartItems(novoCarrinho)
    }

    const onRemoveTotal = (itemCarrinho) => {

        const filtroDelete = cartItems.filter(
            (item) => item.id !== itemCarrinho.id)
        const virarString = JSON.stringify(filtroDelete)
        localStorage.setItem("local", virarString)
        setCartItems(filtroDelete)
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
                <section className={styles.container}>
                    <h2 className={styles.title}>
                        <Image className={styles.carrinhoImg} src={carrinhoImg} alt="carrinhoImg" />
                        Carrinho:
                    </h2>
                    <span className={styles.qtdTotal}>Quantidade de itens: {countCartItems}</span>
                    {cartItems.map((itemCarrinho) => {
                        return (
                            <div className={styles.product} key={itemCarrinho.id}>
                                <div className={styles.firstLine} >
                                    <div className={styles.buttons}>
                                        {itemCarrinho.qtd === 1 ?
                                            <button className={styles.buttonMenos} onClick={() => onRemoveTotal(itemCarrinho)}>-</button>
                                            :
                                            <button className={styles.buttonMenos} onClick={() => onRemove(itemCarrinho)}>-</button>
                                        }
                                        <div className={styles.qtd} >{itemCarrinho.qtd}x</div>
                                        <button className={styles.buttonMais} onClick={() => onAdicionar(itemCarrinho)}>+</button>
                                    </div>
                                    <div className={styles.value}>
                                        <div className={styles.valueSingle} >R$ {itemCarrinho.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })} cada</div>
                                        <div className={styles.valueTotal}>R${(itemCarrinho.value * itemCarrinho.qtd).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</div>
                                    </div>
                                </div>
                                <Image className={styles.imgProduto} src={itemCarrinho.imagemUrl} alt="imageproduto" />
                                <div className={styles.name}>{itemCarrinho.nome}</div>
                                <div className={styles.buttonRemove} onClick={() => onRemoveTotal(itemCarrinho)}>
                                    <Image className={styles.lixeira} src={lixeira} alt="lixeira" />
                                </div>
                            </div>
                        )
                    })}

                    <button className={styles.buttonHome}>
                        <Link className={styles.linkHome} href='/'>Continuar comprando</Link>
                    </button>

                </section>
                <section className={styles.secondColumn}>
                    <Frete />
                    <Payment />
                </section>
            </main>
            <Footer />
        </>
    );
};