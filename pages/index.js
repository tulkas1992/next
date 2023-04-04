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
    <div className={styles.main}>
     <Layout ></Layout>
     </div>
    </>
  )
}



//curso https://www.youtube.com/watch?v=pFT8wD2uRSE&t=319s&ab_channel=midulive 
// min 42m