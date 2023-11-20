import React, { useState } from "react";
import Modal from "../Components/modals/SuccessModal";

export default function SignupPage() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    onsubmit = async (event: any) => {
        event.preventDefault();
        const { name, age, email, password, isAdmin } = event.target.elements;
        const user = {
            name: name.value,
            age: Number(age.value),
            email: email.value,
            password: password.value,
            isAdmin: JSON.parse(isAdmin.value.toLowerCase())
        };
        await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                // Eu sei que essa é uma forma bem terrível de fazer isso, mas o foco aqui é o Backend.
                if(data.message.includes('existe')) {
                    alert(`O email ${email.value} já está cadastrado! Tente outro.`);
                    return;
                } else if (data.message.includes('sucesso')) {
                    setShowSuccessModal(true);
                    sessionStorage.setItem('token', data.data.access_token);
                    setTimeout(() => {
                        window.location.href = '/dashboard';
                    }, 2000);
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
                <h1 className="text-3xl font-bold mb-6 text-center">Cadastro de usuário</h1>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Nome
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="John Doe" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="age">
                                Idade
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="age" type="number" placeholder="30" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                Senha
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="*********" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-2 mb-2">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="isAdmin">
                                É administrador?
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="isAdmin">
                                <option value="false">Não</option>
                                <option value="true">Sim</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-5 mt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Cadastrar
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/entrar">
                            Já possui uma conta?
                        </a>
                    </div>
                </form>
            </div>
            {showSuccessModal && <Modal setOpenModal={setShowSuccessModal} />}
        </div>
    );
}