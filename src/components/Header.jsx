import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-dark py-3 px-5 shadow-lg'>
            <nav>
                <NavLink to='/' className='text-decoration-none font-monospace text-white'>Movies Review</NavLink>
            </nav>
        </header>
    )
}