import useAuth from '@/hooks/auth'

const Home = () => {
    useAuth({
        middleware: 'index',
    })

    return <></>
}

export default Home
