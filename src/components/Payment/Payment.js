import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Image from "next/image";
import { validEmail, validNumberHome, validNumberCard, validCvv } from "../../utils/regex";
import AppContext from '../AppContext'
import styles from './payment.module.css'
import cardImg from "../../../public/img/card_img.png"

export default function Payment() {
    const context = useContext(AppContext)
    const router = useRouter()

    const {
        setCartItems,
        seachCep,
        setSeachCep,
        handleSubmit,
        register,
        countCartItems
    } = context

    const [name, setName] = useState("");
    const [inputNameErr, setInputNameErr] = useState(false);

    const [email, setEmail] = useState("");
    const [inputEmailErr, setInputEmailErr] = useState(false);

    const [numberHome, setNumberHome] = useState("");
    const [inputNumberHomeErr, setInputNumberHomeErr] = useState(false);

    const [nameCard, setNameCard] = useState("");
    const [inputNameCardErr, setInputNameCardErr] = useState(false);

    const [numberCard, setNumberCard] = useState("");
    const [inputNumberCardErr, setInputNumberCardErr] = useState(false);

    const [validityCard, setValidityCard] = useState("");
    const [inputValidityCardErr, setInputValidityCardErr] = useState(false);

    const [cvv, setCvv] = useState("");
    const [inputCvvErr, setInputCvvErr] = useState(false);

    const onSubmit = (e) => {
        console.log(e)
    }

    const handleChangeNumberCard = (event) => {
        const value = event.target.value;
        let formattedValue = value.replace(/[ ]/g, '');

        if (formattedValue.length > 4) {
            const parts = [];
            for (let i = 0; i < formattedValue.length; i += 4) {
                parts.push(formattedValue.substr(i, 4));
            }
            formattedValue = parts.join(' ');
        }

        setNumberCard(formattedValue);
    };

    const handleChangeValidity = (event) => {
        const value = event.target.value;
        let formattedValue = value.replace(/[/]/g, '');

        if (formattedValue.length > 2) {
            const parts = [];
            for (let i = 0; i < formattedValue.length; i += 2) {
                parts.push(formattedValue.substr(i, 2));
            }
            formattedValue = parts.join('/');
        }

        setValidityCard(formattedValue);
    };

    function checkout() {

        if (seachCep) {
            toast.warn('Adicione o CEP!', {
                autoClose: 2000,
            });
        }

        if (name.length <= 3) {
            setInputNameErr(true);
        } else {
            setInputNameErr(false);
        }

        if (!validEmail.test(email)) {
            setInputEmailErr(true);
        } else {
            setInputEmailErr(false);
        }

        if (!validNumberHome.test(numberHome)) {
            setInputNumberHomeErr(true);
        } else {
            setInputNumberHomeErr(false);
        }

        if (nameCard.length <= 3) {
            setInputNameCardErr(true);
        } else {
            setInputNameCardErr(false);
        }

        if (!validNumberCard.test(numberCard)) {
            setInputNumberCardErr(true);
        } else {
            setInputNumberCardErr(false);
        }

        if (validityCard.length <= 4) {
            setInputValidityCardErr(true);
        } else {
            setInputValidityCardErr(false);
        }

        if (!validCvv.test(cvv)) {
            setInputCvvErr(true);
        } else {
            setInputCvvErr(false);
        }

        if (name.length >= 4
            && validEmail.test(email)
            && validNumberHome.test(numberHome)
            && nameCard.length >= 4
            && validNumberCard.test(numberCard)
            && validityCard.length <= 4
            && validCvv.test(cvv)) {

            const virarString = JSON.stringify([])
            localStorage.setItem("local", virarString)
            setCartItems([])
            toast.success('Compra finalizada com sucesso', {
                autoClose: 2000,
                theme: 'colored',
            });
            setSeachCep(true)
            router.push('/')
        }
    }

    return (
        <main className={styles.container_payment}>
            {countCartItems > 0 ? //Renderiza somente se tiver produtos no carrinho
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.title}>Dados Pessoais</h3>
                            <div className={styles.inputBox}>
                                <span>Nome Completo :</span>
                                <input
                                    type="text"
                                    placeholder="Gustavo da Silva"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                                {inputNameErr && <p className={styles.error}>Digite um nome!</p>}
                            </div>
                            <div className={styles.inputBox}>
                                <span>Email :</span>
                                <input
                                    type="email"
                                    placeholder="example@example.com"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                {inputEmailErr && <p className={styles.error}>Digite um email válido!</p>}
                            </div>
                            <div className={styles.inputBox}>
                                <span>Endereço :</span>
                                <input type="text" {...register("endereco")} placeholder="Rua Bartolomeu" />
                            </div>
                            <div className={styles.flex}>
                                <div className={styles.inputBox}>
                                    <span>Nº :</span>
                                    <input
                                        type="number"
                                        placeholder="355"
                                        value={numberHome}
                                        onChange={event => setNumberHome(event.target.value)}
                                    />
                                    {inputNumberHomeErr && <p className={styles.error}>Digite um número!</p>}
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
                                <input
                                    type="text"
                                    placeholder="Gustavo da Silva"
                                    value={nameCard}
                                    onChange={event => setNameCard(event.target.value)}
                                />
                                {inputNameCardErr && <p className={styles.error}>Digite o nome impresso no cartão!</p>}
                            </div>
                            <div className={styles.inputBox}>
                                <span>Nº do Cartão :</span>
                                <input
                                    type="text"
                                    placeholder="1111222233334444"
                                    maxlength="19"
                                    value={numberCard}
                                    onChange={handleChangeNumberCard}
                                />
                                {inputNumberCardErr && <p className={styles.error}>Digite um cartão válido!</p>}
                            </div>
                            <div className={styles.inputBox}>
                                <span> Mês/Ano de Validade :</span>
                                <input
                                    type="text"
                                    placeholder="08/26"
                                    maxlength="5"
                                    value={validityCard}
                                    onChange={handleChangeValidity}
                                />
                                {inputValidityCardErr && <p className={styles.error}>Digite a data de validade do cartão!</p>}
                            </div>
                            <div className={styles.inputBox}>
                                <span>CVV :</span>
                                <input
                                    type="text"
                                    placeholder="123"
                                    maxlength="3"
                                    value={cvv}
                                    onChange={event => setCvv(event.target.value)}
                                />
                                {inputCvvErr && <p className={styles.error}>Digite o CVV do cartão!</p>}
                            </div>
                        </div>
                    </div>
                    <div className={styles.submit_btn} onClick={checkout}>Processar Pagamento</div>
                </form>
                :
                <span />
            }
        </main>
    )
}