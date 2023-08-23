import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
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
    const { register, handleSubmit, setValue } = useForm();


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
                setSeachCep(false)
                setValue('endereco', response.data.logradouro)
                setValue('bairro', response.data.bairro)
                setValue('cidadeUf', `${response.data.localidade}-${response.data.uf}`)
                setInput("");
            }

        } catch {
            toast.error('CEP inválido!', {
                autoClose: 1500,
            });
            setInput("")
        }
    }

    const onSubmit = (e) => {
        console.log(e)
    }

    const limparCep = () => {
        setSeachCep(true)
        setValue('endereco', '')
        setValue('bairro', '')
        setValue('cidadeUf', '')
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

                    <button className={styles.buttonHome}>
                        <Link className={styles.linkHome} href='/'>Continuar comprando</Link>
                    </button>

                </section>
                <section className={styles.secondColumn}>

                    <div className={styles.lineEnd}>
                        {seachCep ?
                            //True - Estado onde renderiza o input para digitar o cep
                            <>
                                {countCartItems > 0 ?
                                    //Se tiver itens no carrinho, renderiza o input de cep
                                    <div className={styles.cep}>

                                        <span className={styles.total}>Total:
                                            <span className={styles.totalValue}> R$ {totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
                                        </span>
                                        <div className={styles.freightValue}>Valor do frete:
                                            <label>
                                                <input className={styles.input}
                                                    type="number"
                                                    placeholder="Buscar cep"
                                                    onChange={(e) => setInput(e.target.value)}
                                                    value={input}
                                                />
                                            </label>
                                            <div className={styles.buttonCep} onClick={handleSearch}>
                                                <Image className={styles.lupa} src={lupa} alt="lupa" />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    //Se não tiver itens no carrinho, não renderiza o input de cep
                                    <span />
                                }
                            </>
                            : //False -  Estado onde renderiza o cep encontrado
                            <>
                                <div className={styles.finalValue}>
                                    <div className={styles.address}>
                                        <button className={styles.buttonClose} onClick={limparCep}>
                                            <Image className={styles.excluir} src={excluir} alt="excluir" />
                                        </button>
                                        <div className={styles.local}>
                                            <span>{cep.logradouro}</span>
                                            <span>{cep.bairro}</span>
                                        </div>
                                        <div className={styles.city}>{cep.localidade}-{cep.uf}</div>
                                        <div className={styles.freight}>Frete Gratuito</div>
                                    </div>
                                    <span className={styles.total}>Total Final c/ Frete:
                                        <span className={styles.totalValue}> R$ {totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
                                    </span>
                                </div>
                            </>
                        }
                    </div>

                    {countCartItems > 0 ?
                        <div className={styles.container_payment}>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className={styles.row}>

                                    <div className={styles.col}>

                                        <h3 className={styles.title}>Dados Pessoais</h3>

                                        <div className={styles.inputBox}>
                                            <span>Nome Completo :</span>
                                            <input type="text" placeholder="Gustavo da Silva" />
                                        </div>
                                        <div className={styles.inputBox}>
                                            <span>Email :</span>
                                            <input type="email" placeholder="example@example.com" />
                                        </div>
                                        <div className={styles.inputBox}>
                                            <span>Endereço :</span>
                                            <input type="text" {...register("endereco")} placeholder="Rua Bartolomeu" />
                                        </div>

                                        <div className={styles.flex}>
                                            <div className={styles.inputBox}>
                                                <span>Nº :</span>
                                                <input type="number" placeholder="355" />
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Complemento :</span>
                                                <input type="text" placeholder="Apartamento 10" />
                                            </div>
                                        </div>


                                        <div className={styles.flex}>
                                            <div className={styles.inputBox}>
                                                <span>Bairro :</span>
                                                <input type="text" {...register("bairro")} placeholder="Centro" />
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Cidade-UF :</span>
                                                <input type="text" {...register("cidadeUf")} placeholder="Rio de Janeiro-RJ" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className={styles.col}>

                                        <h3 className={styles.title}>pagamento</h3>

                                        <div className={styles.inputBox}>
                                            <span>Cartões Aceitos :</span>
                                            <Image className={styles.card_img} src={cardImg} alt="" />
                                        </div>
                                        <div className={styles.inputBox}>
                                            <span>Nome no Cartão :</span>
                                            <input type="text" placeholder="Gustavo da Silva" />
                                        </div>
                                        <div className={styles.inputBox}>
                                            <span>Nº do Cartão :</span>
                                            <input type="number" placeholder="1111-2222-3333-4444" />
                                        </div>
                                        <div className={styles.inputBox}>
                                            <span> Mês/Ano de Validade :</span>
                                            <input type="month" placeholder="Agosto 2026" />
                                        </div>
                                        <div className={styles.inputBox}>
                                            <span>CVV :</span>
                                            <input type="number" placeholder="123" />
                                        </div>

                                    </div>

                                </div>

                                <div className={styles.submit_btn} onClick={avisarCompraFinalizada}>Processar Pagamento</div>

                            </form>

                        </div>
                        :
                        <span />
                    }
                </section>
            </main>
            <Footer />
        </>
    );
};