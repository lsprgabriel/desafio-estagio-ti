import React, { useState } from "react";

export default function LoginPage() {
    const [error, setError] = useState(null);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const user = {
            email: email.value,
            password: password.value,
        };
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.data.access_token);
                window.location.href = '/dashboard';
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                <form className="w-full max-w-lg" onSubmit={onSubmit}>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                Senha
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="*********" required />
                        </div>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex items-center justify-between mx-5 mt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Entrar
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/cadastrar">
                            Criar uma conta
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
