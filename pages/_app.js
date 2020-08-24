import '../styles/index.css'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'
import CodeBlock from '../components/CodeBlock'
import Link from 'next/link'

const components = {
  wrapper: props => (
    <Layout {...props} />
  ),
  code: CodeBlock,
  Link: props => (
    <Link {...props} passHref />
  )
}

function MyApp({ Component, pageProps }) {
  return <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
}

export default MyApp
