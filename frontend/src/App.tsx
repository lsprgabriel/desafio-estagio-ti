import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-black text-center">Desafio Técnico - Frontend</h1>
      <div className="flex flex-col md:flex-row">
        <Link to="/cadastrar" className="mb-2 md:mb-0 md:mr-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Cadastrar
        </Link>
        <Link to="/entrar" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          Entrar
        </Link>
      </div>
    </div>
    </>
  )
}

export default App