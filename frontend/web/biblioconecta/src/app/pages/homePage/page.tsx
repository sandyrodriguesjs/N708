"use client";
import NavBar from "../../components/navBar";
import SideBar from "../../components/sideBar";

const livros = [
    { titulo: "A arte de viver", autor: "Vitória Almeida" },
    { titulo: "Vida longa", autor: "Maria Sandy" },
    { titulo: "Bíblia", autor: "Vários autores" },
    { titulo: "100 receitas", autor: "Ana Maria" },
    { titulo: "Milagre", autor: "José Almir" },
    { titulo: "Até amanhã", autor: "Felipe Souza" },
];

export default function HomePage() {
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <NavBar />

                <main className="flex-1 p-8 bg-[#f5f8ff]">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Biblioteca</h1>

                    {/* Categorias */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {["Popular", "História", "Ciência", "Ação e Aventura"].map((cat) => (
                            <button
                                key={cat}
                                className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow-sm 
                 hover:bg-blue-100 hover:border-blue-400 transition text-gray-800 font-semibold"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Livros */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {livros.map((livro, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
                            >
                                <div className="w-24 h-36 bg-gray-200 rounded-md mb-3" />
                                <h2 className="font-semibold text-gray-800 text-center">
                                    {livro.titulo}
                                </h2>
                                <p className="text-sm text-gray-500 text-center">{livro.autor}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}