import { useRouteError } from "react-router-dom";

export default function ForbiddenPage() {
    const error: any = useRouteError();
    console.error(error);
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/';
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Acesso negado!
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Desculpe, você não tem permissão para acessar esta página.
                    </p>
                    <div className="flex justify-center py-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}
