import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="site-title">
                Jason Shi
            </Link>
            <ul>
                <Link>Resume</Link>
                <Link>Projects</Link>
                <Link>About me</Link>
            </ul>
        </nav>
    )
}