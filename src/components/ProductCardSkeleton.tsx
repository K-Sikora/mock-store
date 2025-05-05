export default function ProductCardSkeleton() {
    return (
        <div
            role="status"
            className="flex h-[300px] w-full animate-pulse rounded-lg shadow-sm shadow-slate-900/20"
        >
            <div className="h-full w-full rounded-lg bg-gray-200 dark:bg-gray-200"></div>

            <span className="sr-only">Loading...</span>
        </div>
    );
}
