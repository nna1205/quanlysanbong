import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <Script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></Script>
        <Component {...pageProps} />
      </Layout>
    ) 
}
