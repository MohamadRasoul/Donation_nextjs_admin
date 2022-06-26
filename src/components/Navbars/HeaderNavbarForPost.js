import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderNavbarForPost = ({
    title,
    toggleModel,
    charitableFoundationId,
    charitableFoundationName,
}) => {
    const router = useRouter()

    return (
        <div className="navbar bg-base-100 rounded-2xl mb-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    <ul
                        tabIndex="0"
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link
                                href={{
                                    pathname:
                                        '/admin/donationPosts/supportPrograms',
                                    query: {
                                        charitableFoundationName: charitableFoundationName,
                                        charitableFoundationId: charitableFoundationId,
                                    },
                                }}>
                                <a
                                    className={
                                        router.pathname.indexOf(
                                            '/admin/donationPosts/supportPrograms',
                                        ) !== -1
                                            ? 'text-white bg-base-green opacity-60 '
                                            : 'hover:text-base-green'
                                    }>
                                    Support Programs
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: '/admin/donationPosts/news',
                                    query: {
                                        charitableFoundationName: charitableFoundationName,
                                        charitableFoundationId: charitableFoundationId,
                                    },
                                }}>
                                <a
                                    className={
                                        router.pathname.indexOf(
                                            '/admin/donationPosts/news',
                                        ) !== -1
                                            ? 'text-white bg-base-green opacity-60'
                                            : 'hover:text-base-green'
                                    }>
                                    News
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: '/admin/donationPosts/cases',
                                    query: {
                                        charitableFoundationName: charitableFoundationName,
                                        charitableFoundationId: charitableFoundationId,
                                    },
                                }}>
                                <a
                                    className={
                                        router.pathname.indexOf(
                                            '/admin/donationPosts/cases',
                                        ) !== -1
                                            ? 'text-white bg-base-green opacity-60'
                                            : 'hover:text-base-green'
                                    }>
                                    Cases
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname:
                                        '/admin/donationPosts/sponsorShips',
                                    query: {
                                        charitableFoundationName: charitableFoundationName,
                                        charitableFoundationId: charitableFoundationId,
                                    },
                                }}>
                                <a
                                    className={
                                        router.pathname.indexOf(
                                            '/admin/donationPosts/sponsorShips',
                                        ) !== -1
                                            ? 'text-white bg-base-green opacity-60'
                                            : 'hover:text-base-green'
                                    }>
                                    Sponsor Ships
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: '/admin/donationPosts/campaigns',
                                    query: {
                                        charitableFoundationName: charitableFoundationName,
                                        charitableFoundationId: charitableFoundationId,
                                    },
                                }}>
                                <a
                                    className={
                                        router.pathname.indexOf(
                                            '/admin/donationPosts/campaigns',
                                        ) !== -1
                                            ? 'text-white bg-base-green opacity-60'
                                            : 'hover:text-base-green'
                                    }>
                                    Campaigns
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
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

export default HeaderNavbarForPost
