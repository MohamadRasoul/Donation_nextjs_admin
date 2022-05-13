import Axios from 'axios'

const TOKEN =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null

const axios = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${TOKEN}`,
    },
    // withCredentials: true,
})

export default axios
