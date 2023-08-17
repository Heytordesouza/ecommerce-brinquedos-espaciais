import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Image from "next/image";
import Link from "next/link";
import AppContext from '../components/AppContext'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import api from "../services/api";
import styles from '../styles/carrinho.module.css'
import carrinhoImg from "../../public/img/carrinho-icon.png"
import lixeira from "../../public/img/lixeira.png"
import excluir from "../../public/img/excluir.png"
import lupa from "../../public/img/lupa.png"
import cardImg from "../../public/img/card_img.png"

export default function Carrinho() {
    const context = useContext(AppContext)

    const {
        cartItems,
        setCartItems,
        consultarItem,
    } = context

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})
    const [seachCep, setSeachCep] = useState(true)


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

    async function handleSearch() {

        if (input === '') {
            toast.warn('Digite algum CEP!', {
                autoClose: 1500,
            });
            return;
        }

        try {
            const response = await api.get(`${input}/json`);

            if (response.data.erro === true) {
                toast.error('CEP não encontrado!', {
                    autoClose: 1500,
                });
                setInput("")
            } else {
                setCep(response.data)
                setInput("");
                setSeachCep(false)
            }

        } catch {
            toast.error('CEP inválido!', {
                autoClose: 1500,
            });
            setInput("")
        }
    }

    function avisarCompraFinalizada() {
        if (cartItems.length === 0) {
            toast.warn('Adicione produtos ao carrinho', {
                autoClose: 2000,
            });
        } else if (seachCep === true) {
            toast.warn('Adicione o CEP!', {
                autoClose: 2000,
            });
        } else {
            const virarString = JSON.stringify([])
            localStorage.setItem("local", virarString)
            setCartItems([])
            setSeachCep(true)
            toast.success('Compra finalizada com sucesso', {
                autoClose: 2000,
                theme: 'colored',
            });
        }
    }



    const itemsPrice = cartItems.reduce((a, c) => {
        return a + c.qtd * c.valor
    }, 0);

    const totalPrice = itemsPrice;

    const countCartItems = cartItems.reduce((a, c) => {
        return a + c.qtd
    }, 0);




    useEffect(() => {
        consultarItem()
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
                                        <div className={styles.valueSingle} >R$ {itemCarrinho.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} cada</div>
                                        <div className={styles.valueTotal}>R${(itemCarrinho.valor * itemCarrinho.qtd).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</div>
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
                    <div className={styles.lineEnd}>
                        {seachCep ?
                            <>
                                {countCartItems > 0 ?
                                    <div className={styles.cep}>
                                        <label>
                                            <input className={styles.input}
                                                type="string"
                                                placeholder="Buscar cep"
                                                onChange={(e) => setInput(e.target.value)}
                                                value={input}
                                            />
                                        </label>
                                        <div className={styles.buttonCep} onClick={handleSearch}>
                                            <Image className={styles.lupa} src={lupa} alt="lupa" />
                                        </div>
                                    </div>
                                    : <span />
                                }
                            </>
                            :
                            <>
                                <div className={styles.address}>
                                    <button className={styles.buttonClose} onClick={() => setSeachCep(true)}>
                                        <Image className={styles.excluir} src={excluir} alt="excluir" />
                                    </button>
                                    <div className={styles.local}>
                                        <span>{cep.logradouro}</span>
                                        <span>{cep.bairro}</span>
                                    </div>
                                    <div className={styles.city}>{cep.localidade}-{cep.uf}</div>
                                    <div className={styles.freight}>Frete Gratuito</div>
                                </div>
                            </>
                        }
                    </div>


                    <p className={styles.total}>Total: R${totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>

                    <div className={styles.end}>
                        <button className={styles.buttonHome}>
                            <Link className={styles.linkHome} href='/'>Continuar comprando</Link>
                        </button>
                        <div className={styles.buttonEnd} onClick={avisarCompraFinalizada}>Finalizar compra</div>
                    </div>
                </section>
                <div className={styles.container_payment}>

                    <form action="">

                        <div className={styles.row}>

                            <div className={styles.col}>

                                <h3 className={styles.title}>Dados Pessoais</h3>

                                <div className={styles.inputBox}>
                                    <span>Nome Completo :</span>
                                    <input type="text" placeholder="Gustavo da Silva"/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Email :</span>
                                    <input type="email" placeholder="example@example.com"/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Endereço :</span>
                                    <input type="text" placeholder="Rua Bartolomeu"/>
                                </div>

                                <div className={styles.flex}>
                                    <div className={styles.inputBox}>
                                        <span>Nº :</span>
                                        <input type="text" placeholder="355"/>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <span>Complemento :</span>
                                        <input type="text" placeholder="Apartamento 10"/>
                                    </div>
                                </div>
                                

                                <div className={styles.flex}>
                                    <div className={styles.inputBox}>
                                        <span>Cidade :</span>
                                        <input type="text" placeholder="Rio de Janeiro"/>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <span>Estado :</span>
                                        <input type="text" placeholder="RJ"/>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.col}>

                                <h3 className={styles.title}>pagamento</h3>

                                <div className={styles.inputBox}>
                                    <span>Cartões Aceitos :</span>
                                    <Image className={styles.card_img} src={cardImg} alt=""/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Nome no Cartão :</span>
                                    <input type="text" placeholder="Gustavo da Silva"/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Nº do Cartão :</span>
                                    <input type="number" placeholder="1111-2222-3333-4444"/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span> Mês de Validade :</span>
                                    <input type="text" placeholder="Agosto"/>
                                </div>

                                <div className={styles.flex}>
                                    <div className={styles.inputBox}>
                                        <span>Ano de Validade :</span>
                                        <input type="number" placeholder="2023"/>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <span>CVV :</span>
                                        <input type="text" placeholder="123"/>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <input type="submit" value="Processar Pagamento" className={styles.submit_btn}/>

                    </form>

                </div>
            </main>
            <Footer />
        </>
    );
};