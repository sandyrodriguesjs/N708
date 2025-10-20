-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "status" TEXT,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "livros" (
    "id_livro" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "ano_publicacao" INTEGER NOT NULL,
    "sinopse" TEXT,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id_livro")
);

-- CreateTable
CREATE TABLE "exemplares" (
    "id_exemplar" SERIAL NOT NULL,
    "id_livro" INTEGER NOT NULL,
    "codigo_exemplar" TEXT NOT NULL,
    "status" TEXT,

    CONSTRAINT "exemplares_pkey" PRIMARY KEY ("id_exemplar")
);

-- CreateTable
CREATE TABLE "emprestimos" (
    "id_emprestimo" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_exemplar" INTEGER NOT NULL,
    "data_retirada" TIMESTAMP(3) NOT NULL,
    "data_prevista_devolucao" TIMESTAMP(3) NOT NULL,
    "data_devolucao" TIMESTAMP(3),
    "renovado" BOOLEAN,

    CONSTRAINT "emprestimos_pkey" PRIMARY KEY ("id_emprestimo")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id_reserva" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_livro" INTEGER NOT NULL,
    "data_reserva" TIMESTAMP(3) NOT NULL,
    "status" TEXT,
    "posicao_fila" INTEGER,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id_avaliacao" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_livro" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "data_avaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id_avaliacao")
);

-- CreateTable
CREATE TABLE "historico" (
    "id_historico" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_exemplar" INTEGER NOT NULL,
    "acao" TEXT NOT NULL,
    "data_acao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_pkey" PRIMARY KEY ("id_historico")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "livros_isbn_key" ON "livros"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "exemplares_codigo_exemplar_key" ON "exemplares"("codigo_exemplar");

-- AddForeignKey
ALTER TABLE "exemplares" ADD CONSTRAINT "exemplares_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "livros"("id_livro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimos" ADD CONSTRAINT "emprestimos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimos" ADD CONSTRAINT "emprestimos_id_exemplar_fkey" FOREIGN KEY ("id_exemplar") REFERENCES "exemplares"("id_exemplar") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "livros"("id_livro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "livros"("id_livro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_id_exemplar_fkey" FOREIGN KEY ("id_exemplar") REFERENCES "exemplares"("id_exemplar") ON DELETE RESTRICT ON UPDATE CASCADE;
