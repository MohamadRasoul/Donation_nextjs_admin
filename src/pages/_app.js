import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'styles/tailwind.css'

import Router from 'next/router'
import NProgress from 'nprogress'
import { SWRConfig } from 'swr'
import axios from '@/lib/axios'
import Head from 'next/head'
import 'styles/nprogress.css'

// primereact
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })

const fetcher = async url => await axios.get(url).then(res => res.data)

const App = ({ Component, pageProps }) => {
    const Layout = Component.layout || (({ children }) => <>{children}</>)

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            
            <SWRConfig
                value={{
                    refreshInterval: 3000,
                    fetcher,
                }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
            </SWRConfig>
        </>
    )
}

export default App
