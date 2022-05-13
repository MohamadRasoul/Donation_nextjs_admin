import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'

// layout for page
import Admin from 'layouts/Admin.js'

const Charities = () => {
    const [charitableFoundations, setCharitableFoundations] = useState()
    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const getCharities = async () => {
        await axios
            .get('admin/charitableFoundation')
            .then(res => {
                setCharitableFoundations(res.data.data.charitableFoundations)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCharities()
    }, [])

    return (
        <>
            <div className="grid w-full xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
                {charitableFoundations?.map(charitableFoundation => (
                    <div className="shadow-xl card bg-base-100 image-full">
                        <figure>
                            <img
                                src="https://api.lorem.space/image/house?w=400&h=225"
                                alt="Charities"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {charitableFoundation.name}
                            </h2>
                            <p className="h-20 overflow-hidden overflow-ellipsis leading-relaxed">{charitableFoundation.description}</p>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">
                                    Show More ...
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Charities

Charities.layout = Admin
