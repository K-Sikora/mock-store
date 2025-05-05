import { Link } from 'react-router';
import type { Product } from '../routes/Products';

export default function ProductCard({ props }: { props: Product }) {
    return (
        <div className="h-full w-full gap-4 rounded-lg text-slate-900 shadow-sm shadow-slate-900/20">
            <Link
                className="group flex h-full w-full flex-col gap-2 p-4"
                to={`/product/${props.id}`}
            >
                <img
                    className="h-48 object-contain group-hover:opacity-90"
                    src={props.image}
                    alt={props.title}
                />
                <h4 className="text-sm group-hover:underline">{props.title}</h4>
                <h6 className="mt-auto text-sm font-bold">${props.price}</h6>
            </Link>
        </div>
    );
}
