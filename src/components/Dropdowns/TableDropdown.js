import React from 'react'
import { createPopper } from '@popperjs/core'

const TableDropdown = ({ modelId, handelDelete }) => {
    // dropdown props

    return (
        <>
            <div className="z-20 dropdown dropdown-left">
                <label tabindex="0" className="p-1 cursor-pointer ">
                    <i className="fas fa-ellipsis-v"></i>
                </label>
                <ul
                    tabindex="0"
                    className="p-2 rounded-lg shadow-md dropdown-content menu bg-base-100 w-52">
                    <li>
                        <a>
                            <i class="fa-solid fa-pen-to-square"></i>
                            Edit
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handelDelete(modelId)}>
                            <i class="fa-solid fa-trash-can"></i>
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TableDropdown
