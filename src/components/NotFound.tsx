import { Link } from 'react-router';

export default function NotFound() {
    return (
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-5 py-10 text-center">
            <h1 className="text-4xl font-bold">
                Oops, looks like this page doesn&apos;t exist.
            </h1>
            <div className="flex gap-2">
                <Link to="/" className="text-blue-400 hover:underline">
                    Go back to home
                </Link>
                <span className="text-gray-400">or</span>
                <Link to="/products" className="text-blue-400 hover:underline">
                    see our products
                </Link>
            </div>
        </div>
    );
}
