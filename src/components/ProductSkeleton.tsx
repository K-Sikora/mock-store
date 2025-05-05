export default function ProductSkeleton() {
    return (
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-10 text-4xl">
            <div className="flex w-full flex-col gap-10 lg:flex-row">
                <div
                    role="status"
                    className="flex h-96 w-full animate-pulse rounded-lg lg:w-1/2"
                >
                    <div className="h-full w-full rounded-lg bg-gray-300"></div>

                    <span className="sr-only">Loading...</span>
                </div>

                <div
                    role="status"
                    className="flex h-96 w-full animate-pulse flex-col gap-4 rounded-lg lg:w-1/2"
                >
                    <div className="h-full w-full rounded-lg bg-gray-300"></div>
                    <div className="h-full w-full rounded-lg bg-gray-300"></div>
                    <div className="h-full w-full rounded-lg bg-gray-300"></div>
                    <div className="h-full w-full rounded-lg bg-gray-300"></div>
                    <div className="h-full w-full rounded-lg bg-gray-300"></div>

                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}
