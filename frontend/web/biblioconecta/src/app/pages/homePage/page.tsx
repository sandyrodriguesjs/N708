"use client";
import { useState } from "react";
import { Search, Filter } from "lucide-react";
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
  const [termo, setTermo] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [assuntosSelecionados, setAssuntosSelecionados] = useState<string[]>([]);

  const assuntos = ["Drama", "Filosofia", "Biologia", "Romance", "História", "Matemática"];

  const alternarAssunto = (assunto: string) => {
    setAssuntosSelecionados((prev) =>
      prev.includes(assunto) ? prev.filter((a) => a !== assunto) : [...prev, assunto]
    );
  };

  const livrosFiltrados = livros.filter((livro) => {
    const correspondeTermo =
      livro.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termo.toLowerCase());
    const correspondeTitulo = titulo ? livro.titulo.toLowerCase().includes(titulo.toLowerCase()) : true;
    const correspondeAutor = autor ? livro.autor.toLowerCase().includes(autor.toLowerCase()) : true;
    return correspondeTermo && correspondeTitulo && correspondeAutor;
  });

  return (
    <div className="flex min-h-screen bg-[#f5f8ff]">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">Biblioteca</h1>

          {/* 🔍 Campo de busca principal */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <input
              type="text"
              placeholder="Book, ISBN, Author, Publisher..."
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* 🔽 Área de filtros */}
          {mostrarFiltros && (
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
              {/* Filtro por título */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Títulos</label>
                <input
                  type="text"
                  placeholder="Digite o título..."
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Filtro por autor */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Autor</label>
                <input
                  type="text"
                  placeholder="Digite o autor..."
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Filtro por assunto */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Assunto</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {assuntos.map((assunto) => (
                    <button
                      key={assunto}
                      onClick={() => alternarAssunto(assunto)}
                      className={`px-3 py-2 rounded-full border ${
                        assuntosSelecionados.includes(assunto)
                          ? "bg-blue-500 text-white border-blue-600"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      } hover:bg-blue-100 transition`}
                    >
                      {assunto}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="text-blue-600 font-semibold hover:underline">
                  mostrar mais...
                </button>
              </div>
            </div>
          )}

          {/* 📚 Livros */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {livrosFiltrados.map((livro, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
              >
                <div className="w-24 h-36 bg-gray-200 rounded-md mb-3" />
                <h2 className="font-semibold text-gray-800 text-center">{livro.titulo}</h2>
                <p className="text-sm text-gray-500 text-center">{livro.autor}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
