import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Oops!
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Desculpe, ocorreu um erro inesperado.
                    </p>
                    <p className="mt-2 text-center text-sm text-gray-600 italic">
                        {error.statusText || error.message}
                    </p>
                </div>
            </div>
        </div>
    );

}
