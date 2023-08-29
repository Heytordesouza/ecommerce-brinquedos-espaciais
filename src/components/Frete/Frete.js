import { useContext, useState } from 'react'
import Image from "next/image";
import { toast } from 'react-toastify'
import api from "../../services/api";
import AppContext from '../AppContext'
import excluir from "../../../public/img/excluir.png"
import lupa from "../../../public/img/lupa.png"
import styles from './frete.module.css'

export default function Frete() {
    const context = useContext(AppContext)

    const {
        seachCep,
        setSeachCep,
        setValue,
        totalPrice,
        countCartItems
    } = context

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})

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

    const limparCep = () => {
        setSeachCep(true)
        setValue('endereco', '')
        setValue('bairro', '')
        setValue('cidadeUf', '')
    } 

    return (
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
    )
}