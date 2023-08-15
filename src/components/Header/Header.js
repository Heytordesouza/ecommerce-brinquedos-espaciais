import React from "react";
import { useContext } from "react";
import { useRouter } from 'next/router'
import AppContext from "../AppContext";
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css'
import carrinhoImg from "../../../public/img/carrinho-icon.png"
import logo from "../../../public/img/logo.png"

export default function Header() {
  const context = useContext(AppContext)
  const router = useRouter()

  const { cartItems } = context

  const countCartItems = cartItems.reduce((a, c) => {
    return a + c.qtd
  }, 0);

  return (
    <main className={styles.container}>
      {router.asPath === '/' ?
        <>
          <Image priority={true} className={styles.logo} src={logo} alt="logo" />
          <Link href='/carrinho' className={styles.cartQuantity}>
            <Image
              className={styles.iconCart}
              src={carrinhoImg}
              alt="carrinhoImg"
            />
            <span className={styles.cartLength}>{countCartItems}</span>
          </Link>
        </>
        :
        <Link href='/'>
          <Image
            priority={true}
            className={styles.logo}
            src={logo}
            alt="logo" />
        </Link>
      }
    </main>
  );
};

