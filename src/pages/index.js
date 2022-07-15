import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user, logout } = useAuth({
        middleware: 'guest',
        role: 'Admin',
    })

    

    return (
        <>
           
        </>
    )
}
