import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import "@fontsource/inter";
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import Layout from '../components/layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={styles.main}>
     <Layout ></Layout>
     </main>
    </>
  )
}
