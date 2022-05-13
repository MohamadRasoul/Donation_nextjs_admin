import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'styles/tailwind.css'
import { AuthContextProvider } from '@/store/auth-context'

const App = ({ Component, pageProps }) => {
    const Layout = Component.layout || (({ children }) => <>{children}</>)

    return (
        <>
            <AuthContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthContextProvider>
        </>
    )
}

export default App
