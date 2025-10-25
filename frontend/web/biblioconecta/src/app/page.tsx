"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f8fb] px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-black">
        Bem-vindo!
      </h1>

      {/* Formulário */}
      <form className="flex flex-col gap-4 w-full max-w-xs">
        {/* Campo de e-mail */}
        <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2 bg-white">
          {<Mail className="w-5 h-5 text-gray-500 mr-2" />}
          <input
            type="email"
            placeholder="seuemail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Campo de senha */}
        <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2 bg-white">
          {<Lock className="w-5 h-5 text-gray-500 mr-2" />}
          <input
            type="password"
            placeholder="•••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Botões */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          Entrar →
        </button>

        <Link
          href="pages/registerPage"
          className="text-sky-500 font-medium hover:underline hover:text-sky-600 transition"
        >
          <button
            type="button"
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >

            Cadastre-se →
          </button>
        </Link>
      </form>

      {/* Esqueceu senha */}
      <p className="text-sm text-gray-500 mt-4 hover:underline cursor-pointer">
        Esqueceu a senha?
      </p>
    </div>
  );
}