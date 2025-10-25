"use client";
import { Search } from "lucide-react";

export default function NavBar() {
  return (
    <header className="w-full h-16 bg-blue-500 border-b border-gray-200 flex items-center justify-end px-6">
      {/* 🔹 Lado direito (usuário) */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
          U
        </div>
        <span className="text-sm text-white font-medium">Usuário</span>
      </div>
    </header>
  );
}
