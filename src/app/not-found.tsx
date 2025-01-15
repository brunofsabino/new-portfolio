export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div style={{
                backgroundImage: 'url(/assets/images/men-404.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className="w-[90%] md:w-[50%]  flex items-center justify-center flex-col font-sans h-screen " >
                <div className="flex items-center justify-center flex-col bg-[#000000e0] rounded-lg p-5 text-white text-center">
                    <h1 className="text-1xl md:text-4xl font-bold">404 - Página não encontrada</h1>
                    <p>A página que você está procurando não existe.</p>
                    <a href="/" style={{ textDecoration: 'underline' }}>
                        Voltar para a página inicial
                    </a>
                </div>

            </div>
        </div>

    );
}