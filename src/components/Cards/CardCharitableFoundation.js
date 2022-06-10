import React from 'react'
import Link from 'next/link'

const CardCharitableFoundation = ({ charitableFoundation }) => {
    return (
        <div
            key={charitableFoundation.id}
            className="shadow-xl card bg-base-100 image-full">
            <figure>
                <img
                    src={charitableFoundation.cover}
                    alt="charitableFoundations"
                />
            </figure>
            <div className="card-body">
                <div className="flex">
                    <div className="mr-5 avatar">
                        <div className="w-16 h-16 rounded-full">
                            <img
                                src={charitableFoundation.image}
                                alt="charitableFoundations"
                            />
                        </div>
                    </div>
                    <h2 className="card-title">{charitableFoundation.name}</h2>
                </div>
                <p className="h-20 overflow-hidden leading-relaxed overflow-ellipsis">
                    {charitableFoundation.description}
                </p>
                <div className="justify-end card-actions">
                    <Link
                        href={`/admin/charitableFoundations/${charitableFoundation.id}`}>
                        <a className="btn btn-primary">Show More ...</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCharitableFoundation
