import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';

export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    };
    title: string;
};

type SortOption =
    | 'default'
    | 'title-asc'
    | 'title-desc'
    | 'price-asc'
    | 'price-desc';

export default function Products() {
    const [sortOption, setSortOption] = useState<SortOption>('default');

    async function getProducts(): Promise<Product[]> {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );
            return response.data;
        } catch {
            throw new Error('Nie udało się pobrać produktów.');
        }
    }

    const {
        data: products,
        isFetching,
        isSuccess,
        isError,
    } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    const sortedProducts = !products
        ? []
        : [...products].sort((a, b) => {
              switch (sortOption) {
                  case 'title-asc':
                      return a.title.localeCompare(b.title);
                  case 'title-desc':
                      return b.title.localeCompare(a.title);
                  case 'price-asc':
                      return a.price - b.price;
                  case 'price-desc':
                      return b.price - a.price;
                  default:
                      return 0;
              }
          });

    if (isFetching)
        return (
            <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-5 py-10">
                <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
                        <ProductCardSkeleton key={item} />
                    ))}
                </div>
            </div>
        );

    if (isError) {
        return (
            <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-10">
                <div className="text-center">
                    <h2 className="text-center text-2xl">
                        Nie udało się pobrać produktów.
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 py-10">
            {isSuccess && products && products.length > 0 ? (
                <>
                    <div className="mb-6 flex w-full items-center justify-between">
                        <h2 className="text-2xl font-bold">Products</h2>
                        <div className="flex items-center space-x-2">
                            <label
                                htmlFor="sort"
                                className="text-sm font-medium"
                            >
                                Sort by:
                            </label>
                            <select
                                id="sort"
                                value={sortOption}
                                onChange={(e) =>
                                    setSortOption(e.target.value as SortOption)
                                }
                                className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none"
                            >
                                <option value="default">Default</option>
                                <option value="title-asc">Title (A-Z)</option>
                                <option value="title-desc">Title (Z-A)</option>
                                <option value="price-asc">
                                    Price (Low to High)
                                </option>
                                <option value="price-desc">
                                    Price (High to Low)
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
                        {sortedProducts.map((product) => (
                            <ProductCard props={product} key={product.id} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-center text-2xl">
                        Nie udało się pobrać produktów.
                    </h2>
                </div>
            )}
        </div>
    );
}
