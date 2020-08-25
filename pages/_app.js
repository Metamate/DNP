import '../styles/index.css'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import CodeBlock from '../components/code-block'
import Link from 'next/link'

const components = {
  wrapper: props => (
    <Layout {...props} />
  ),
  code: CodeBlock,
  Link: props => (
    <Link {...props} passHref />
  ),
  iframe: props => (<div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: '0' }}><iframe style={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%' }} {...props} /></div>)
}

function MyApp({ Component, pageProps }) {
  return <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
}

export default MyApp
