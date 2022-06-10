import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'styles/tailwind.css'

import { AuthContextProvider } from '@/store/auth-context'
import Router from 'next/router'
import 'styles/nprogress.css'
import NProgress from 'nprogress'
import { SWRConfig } from 'swr'
import axios from '@/lib/axios'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })

const fetcher = async url => await axios.get(url).then(res => res.data)

const App = ({ Component, pageProps }) => {
    const Layout = Component.layout || (({ children }) => <>{children}</>)

    return (
        <>
            <SWRConfig
                value={{
                    refreshInterval: 3000,
                    fetcher,
                }}>
                <AuthContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AuthContextProvider>
            </SWRConfig>
        </>
    )
}

export default App
