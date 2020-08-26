import "@/styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import components from "@/components/mdx-components";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
