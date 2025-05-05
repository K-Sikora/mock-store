import { Link } from 'react-router';

export default function Navbar() {
    return (
        <div className="p-5">
            <nav className="mx-auto max-w-6xl rounded-full bg-slate-800 p-5">
                <ul className="flex items-center justify-center gap-4">
                    <li>
                        <Link className="text-blue-400 hover:underline" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-400 hover:underline"
                            to="/products"
                        >
                            Products
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
