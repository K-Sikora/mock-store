import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Home() {
    const [lastProductId, setLastProductId] = useState<string | null>(null);

    useEffect(() => {
        const storedId = localStorage.getItem('lastVisitedProductId');
        if (storedId) {
            setLastProductId(storedId);
        }
    }, []);

    return (
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-10 text-center text-4xl">
            <div className="flex flex-col items-center">
                <h1 className="mb-8">Home</h1>

                {lastProductId && (
                    <Link
                        to={`/product/${lastProductId}`}
                        className="rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700"
                    >
                        Wróć do przeglądania produktu
                    </Link>
                )}
            </div>
        </div>
    );
}
