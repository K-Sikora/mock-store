import { useParams } from 'react-router';
import type { Product } from './Products';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductSkeleton from '../components/ProductSkeleton';
import { useEffect } from 'react';

export default function Product() {
    const { id } = useParams();

    async function getProduct(): Promise<Product> {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            );
            return response.data;
        } catch {
            throw new Error('Product not found');
        }
    }

    const {
        data: product,
        isFetching,
        isSuccess,
        isError,
    } = useQuery({
        queryKey: ['product', id],
        queryFn: getProduct,
    });

    useEffect(() => {
        if (isSuccess && product) {
            localStorage.setItem('lastVisitedProductId', product.id.toString());
        }
    }, [isSuccess, product]);

    if (isFetching) return <ProductSkeleton />;

    if (isError || !product) {
        return (
            <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-10">
                <h2 className="text-center text-2xl">
                    Nie udało się pobrać produktu.
                </h2>
            </div>
        );
    }

    return (
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-10 text-4xl">
            <div className="flex flex-col gap-10 lg:flex-row">
                <img
                    className="aspect-square h-96 w-full object-contain object-center lg:w-1/2"
                    src={product.image}
                    alt={product.title}
                />
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                    <h4 className="text-base font-medium">
                        {product.category}
                    </h4>

                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <h4 className="flex items-center gap-2 text-base font-bold">
                        <img
                            className="h-4 w-4"
                            src="/star.svg"
                            alt="rating star"
                        />{' '}
                        {product.rating.rate}{' '}
                        <span className="text-sm font-normal">
                            {' '}
                            ({product.rating.count} reviews)
                        </span>
                    </h4>
                    <h3 className="text-xl font-semibold">${product.price}</h3>
                    <p className="text-sm">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
