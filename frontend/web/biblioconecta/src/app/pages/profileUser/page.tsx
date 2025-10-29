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
    telefone: "(11) 99999-9999",
  });

  const [historico, setHistorico] = useState<LivroHistorico[]>([
    { titulo: "A arte de viver", dataLeitura: "2025-10-10" },
    { titulo: "Vida longa", dataLeitura: "2025-09-20" },
    { titulo: "O poder do hábito", dataLeitura: "2025-08-15" },
  ]);

  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  // Validar formato de telefone
  const validarTelefone = (telefone: string): boolean => {
    const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    return regexTelefone.test(telefone) || telefone === "";
  };

  // Validar email
  const validarEmail = (email: string): boolean => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  // Formatar telefone enquanto digita
  const formatarTelefone = (valor: string): string => {
    const numeros = valor.replace(/\D/g, '');
    
    if (numeros.length <= 2) {
      return numeros;
    } else if (numeros.length <= 6) {
      return `(${numeros.slice(0,2)}) ${numeros.slice(2)}`;
    } else if (numeros.length <= 10) {
      return `(${numeros.slice(0,2)}) ${numeros.slice(2,6)}-${numeros.slice(6)}`;
    } else {
      return `(${numeros.slice(0,2)}) ${numeros.slice(2,7)}-${numeros.slice(7,11)}`;
    }
  };

  // Formatar data para exibição
  const formatarData = (data: string): string => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const handleChange = (campo: keyof Usuario, valor: string) => {
    setErro(null);
    setSucesso(false);

    let valorFormatado = valor;

    // Aplica formatação específica para telefone
    if (campo === 'telefone') {
      valorFormatado = formatarTelefone(valor);
    }

    setUsuario((prev) => ({ ...prev, [campo]: valorFormatado }));
  };

  const validarCampos = (): boolean => {
    if (!usuario.nome.trim()) {
      setErro("O nome é obrigatório");
      return false;
    }

    if (!validarEmail(usuario.email)) {
      setErro("Por favor, insira um email válido");
      return false;
    }

    if (usuario.telefone && !validarTelefone(usuario.telefone)) {
      setErro("Por favor, insira um telefone válido");
      return false;
    }

    return true;
  };

  const salvarAlteracoes = async () => {
    if (!validarCampos()) {
      return;
    }

    setCarregando(true);
    setErro(null);

    try {
      // Simulação de uma requisição API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSucesso(true);
      // Em uma aplicação real, aqui você enviaria os dados para o backend
      console.log("Dados a serem salvos:", usuario);
      
    } catch (error) {
      setErro("Erro ao salvar as alterações. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  // Função para obter a inicial do nome para o avatar
  const obterInicial = (nome: string): string => {
    return nome.charAt(0).toUpperCase();
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

          {/* Mensagens de feedback */}
          {erro && (
            <div className="max-w-3xl mx-auto mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {erro}
            </div>
          )}

          {sucesso && (
            <div className="max-w-3xl mx-auto mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Alterações salvas com sucesso!
            </div>
          )}

          {/* Seção de dados do usuário */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
                {obterInicial(usuario.nome)}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{usuario.nome}</h2>
              <p className="text-gray-500">{usuario.email}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={usuario.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={usuario.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="text"
                  value={usuario.telefone}
                  onChange={(e) => handleChange("telefone", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Formato: (DD) 99999-9999
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={salvarAlteracoes}
                disabled={carregando}
                className={`bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition font-semibold flex items-center gap-2 ${
                  carregando ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {carregando ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Salvando...
                  </>
                ) : (
                  'Salvar Alterações'
                )}
              </button>
            </div>
          </div>

          {/* Histórico de livros */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Histórico de Leitura
            </h2>
            
            {historico.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                Nenhum livro lido ainda.
              </p>
            ) : (
              <div className="space-y-3">
                {historico.map((livro, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {livro.titulo}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          Data de leitura: {formatarData(livro.dataLeitura)}
                        </p>
                      </div>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        Lido
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-6 text-center">
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                Ver histórico completo →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
