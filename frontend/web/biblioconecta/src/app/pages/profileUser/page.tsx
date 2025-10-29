"use client";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import SideBar from "../../components/sideBar";

interface Usuario {
  nome: string;
  email: string;
  avatar?: string;
}

interface LivroHistorico {
  id: string;
  titulo: string;
  dataLeitura: string;
  autor?: string;
  capa?: string;
}

export default function PerfilUsuarioPage() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [historico, setHistorico] = useState<LivroHistorico[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  // Função para buscar dados do backend
  const buscarDadosUsuario = async () => {
    try {
      setCarregando(true);
      setErro(null);
      
      const resposta = await fetch("http://localhost:3030/me", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Adicionar credentials se necessário para autenticação
        // credentials: 'include'
      });

      if (!resposta.ok) {
        throw new Error(`Erro ${resposta.status}: ${resposta.statusText}`);
      }

      const dados = await resposta.json();

      // Adaptação flexível para diferentes estruturas de resposta
      setUsuario({
        nome: dados.nome || dados.name || "Usuário",
        email: dados.email || "",
        avatar: dados.avatar || dados.foto || dados.imagem
      });

      // Histórico pode vir em diferentes formatos
      const historicoData = dados.historico || dados.history || dados.livrosLidos || [];
      setHistorico(Array.isArray(historicoData) ? historicoData : []);

    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      setErro(
        error instanceof Error 
          ? error.message 
          : "Não foi possível carregar os dados do usuário. Tente novamente mais tarde."
      );
    } finally {
      setCarregando(false);
    }
  };

  // Função para recarregar dados
  const recarregarDados = () => {
    buscarDadosUsuario();
  };

  useEffect(() => {
    buscarDadosUsuario();
  }, []);

  const formatarData = (data: string): string => {
    try {
      return new Date(data).toLocaleDateString("pt-BR");
    } catch {
      return "Data inválida";
    }
  };

  const obterInicial = (nome: string): string => {
    return nome.charAt(0).toUpperCase();
  };

  // Componente de loading
  if (carregando) {
    return (
      <div className="relative min-h-screen bg-[#f5f8ff] flex flex-col">
        <NavBar />
        <main className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando informações do perfil...</p>
          </div>
        </main>
        <div className="fixed bottom-0 left-0 z-50">
          <SideBar />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f5f8ff] flex flex-col">
      <NavBar />

      <main className="flex-1 p-8 pb-20"> {/* Padding extra para não sobrepor sidebar */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
          Perfil do Usuário
        </h1>

        {/* Mensagem de erro com botão de tentar novamente */}
        {erro && (
          <div className="max-w-3xl mx-auto mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
            <p className="mb-3">{erro}</p>
            <button
              onClick={recarregarDados}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {usuario && (
          <>
            {/* Seção de dados do usuário */}
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
                  {usuario.avatar ? (
                    <img 
                      src={usuario.avatar} 
                      alt={usuario.nome}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    obterInicial(usuario.nome)
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{usuario.nome}</h2>
                <p className="text-gray-500">{usuario.email}</p>
              </div>

              {/* Exibição dos dados (somente leitura) */}
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo
                  </label>
                  <div className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 text-gray-700">
                    {usuario.nome}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <div className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 text-gray-700">
                    {usuario.email}
                  </div>
                </div>
              </div>

              {/* Botão para atualizar dados */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={recarregarDados}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Atualizar Dados
                </button>
              </div>
            </div>

            {/* Histórico de leitura */}
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Histórico de Leitura
                </h2>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {historico.length} {historico.length === 1 ? 'livro' : 'livros'}
                </span>
              </div>

              {historico.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-6xl mb-4">📚</div>
                  <p className="text-gray-500 text-lg mb-2">Nenhum livro lido ainda</p>
                  <p className="text-gray-400 text-sm">Seus livros lidos aparecerão aqui</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {historico.map((livro, index) => (
                    <div
                      key={livro.id || index}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {livro.titulo}
                          </h3>
                          {livro.autor && (
                            <p className="text-gray-600 text-sm mt-1">por {livro.autor}</p>
                          )}
                          <p className="text-gray-500 text-sm mt-2">
                            📅 Lido em {formatarData(livro.dataLeitura)}
                          </p>
                        </div>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                          Concluído
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {historico.length > 0 && (
                <div className="mt-6 text-center">
                  <button className="text-blue-500 hover:text-blue-600 font-medium transition-colors flex items-center justify-center gap-2 mx-auto">
                    Ver histórico completo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Sidebar fixa no canto inferior esquerdo */}
      <div className="fixed bottom-0 left-0 z-50">
        <SideBar />
      </div>
    </div>
  );
}
