import { useContext } from 'react'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import AuthContext from '@/store/auth-context'

export default function middleware(req, ev) {
    // const url = req.url
    // const { pathname, origin } = req.nextUrl
    // const { cookies } = req

    // const userIsLoggedIn = cookies.laravel_session

    // if (url.includes('/login') && userIsLoggedIn) {
    //     return NextResponse.redirect(`${origin}/dashboard`)
    // } else if (url.includes('/dashboard') && !userIsLoggedIn) {
    //     return NextResponse.redirect(`${origin}/login`)
    // }

    return NextResponse.next()
}
