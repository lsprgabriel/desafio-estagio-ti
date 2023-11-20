import { useState, useEffect } from 'react';

export default function EditPage() {
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        const jwtToken = sessionStorage.getItem('token');
        const userId = window.location.pathname.split('/')[2];

        fetch(`http://localhost:3000/api/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const onsubmit = async (event: any) => {
        event.preventDefault();
        const { name, age, email, password, isAdmin } = event.target.elements;
        const user = {
            name: name.value,
            age: Number(age.value),
            email: email.value,
            password: password.value,
            isAdmin: JSON.parse(isAdmin.value.toLowerCase())
        };
        const userId = window.location.pathname.split('/')[2];
        const jwtToken = sessionStorage.getItem('token');

        await fetch(`http://localhost:3000/api/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message.includes('sucesso')) {

                    window.location.href = '/dashboard';
  
                    return;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">Edição de usuário</h1>
                <form className="w-full max-w-lg" onSubmit={onsubmit}>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Nome
                            </label>
                            <input defaultValue={user.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="age">
                                Idade
                            </label>
                            <input defaultValue={user.age} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="age" type="number" placeholder="30" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input defaultValue={user.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="teste@teste.com" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                Senha
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="********" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="isAdmin">
                                Administrador
                            </label>
                            <select defaultValue={user.isAdmin} className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="isAdmin">
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-2">
                        <div className="w-full px-3">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                Editar
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}