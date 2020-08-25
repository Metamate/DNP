import Head from 'next/head'
import { APP_NAME } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <title>{APP_NAME}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
    </Head>
  )
}