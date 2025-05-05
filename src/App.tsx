import { Route, Routes } from 'react-router';
import Home from './routes/Home';
import Products from './routes/Products';
import Product from './routes/Product';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-white font-[Lato] text-slate-900">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
