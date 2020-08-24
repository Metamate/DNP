import '../styles/index.css'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import CodeBlock from '../components/CodeBlock'

const components = {
  wrapper: props => (
    <Layout {...props} />
  ),
  pre: props => <div {...props} />,
  code: CodeBlock
}

//TODO FIX THOSE LINKS ind MDX

function MyApp({ Component, pageProps }) {
  return <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
}

export default MyApp
