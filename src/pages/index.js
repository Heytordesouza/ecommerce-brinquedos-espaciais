import Head from 'next/head'
import HomePage from './homepage'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Brinquedos Espaciais</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
