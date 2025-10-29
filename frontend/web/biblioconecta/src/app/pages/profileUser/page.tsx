"use client";
import { useState } from "react";
import NavBar from "../../components/navBar";
import SideBar from "../../components/sideBar";

interface Usuario {
  nome: string;
  email: string;
  telefone?: string;
}

interface LivroHistorico {
  titulo: string;
  dataLeitura: string;
}

export default function PerfilUsuarioPage() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "Vitória Almeida",
    email: "vitoria@example.com",
    telefone: "11999999999",
  });

  const [historico, setHistorico] = useState<LivroHistorico[]>([
    { titulo: "A arte de viver", dataLeitura: "2025-10-10" },
    { titulo: "Vida longa", dataLeitura: "2025-09-20" },
  ]);

  const handleChange = (campo: keyof Usuario, valor: string) => {
    setUsuario((prev) => ({ ...prev, [campo]: valor }));
  };

  const salvarAlteracoes = () => {
    alert("Alterações salvas com sucesso!");
    // Aqui você integraria com o backend
  };

  return (
    <div className="flex min-h-screen bg-[#f5f8ff]">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
            Perfil do Usuário
          </h1>

          {/* Seção de dados do usuário */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4" />
              <h2 className="text-xl font-semibold">{usuario.nome}</h2>
              <p className="text-gray-500">{usuario.email}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Nome</label>
                <input
                  type="text"
                  value={usuario.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  value={usuario.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Telefone</label>
                <input
                  type="text"
                  value={usuario.telefone}
                  onChange={(e) => handleChange("telefone", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={salvarAlteracoes}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
              >
                Salvar Alterações
              </button>
            </div>
          </div>

          {/* Histórico de livros */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Histórico de Leitura</h2>
            <ul className="space-y-2">
              {historico.map((livro, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <span>{livro.titulo}</span>
                  <span className="text-gray-500 text-sm">{livro.dataLeitura}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
