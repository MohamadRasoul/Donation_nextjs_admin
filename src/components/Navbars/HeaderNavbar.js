const HeaderNavbar = ({ title, toggleModel }) => {
    return (
        <div className="navbar bg-base-100 rounded-2xl mb-14">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    <ul
                        tabIndex="0"
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a>Homepage</a>
                        </li>
                        <li>
                            <a>Portfolio</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className="navbar-center">
                <a className="text-xl normal-case btn btn-ghost">{title}</a>
            </div>
            <div className="navbar-end">
                <button
                    onClick={e => toggleModel(e)}
                    className="gap-2 btn btn-active btn-primary rounded-xl">
                    <i className="text-lg fa-solid fa-plus"></i>
                    Add
                </button>
            </div>
        </div>
    )
}

export default HeaderNavbar
