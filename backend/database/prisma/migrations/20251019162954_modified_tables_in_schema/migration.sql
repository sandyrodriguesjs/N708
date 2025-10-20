/*
  Warnings:

  - You are about to drop the column `nome_completo` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `senha_hash` on the `usuarios` table. All the data in the column will be lost.
  - Made the column `comentario` on table `avaliacoes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_devolucao` on table `emprestimos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `renovado` on table `emprestimos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `exemplares` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sinopse` on table `livros` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `reservas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `posicao_fila` on table `reservas` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `name` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "avaliacoes" ALTER COLUMN "comentario" SET NOT NULL;

-- AlterTable
ALTER TABLE "emprestimos" ALTER COLUMN "data_devolucao" SET NOT NULL,
ALTER COLUMN "renovado" SET NOT NULL;

-- AlterTable
ALTER TABLE "exemplares" ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "livros" ALTER COLUMN "sinopse" SET NOT NULL;

-- AlterTable
ALTER TABLE "reservas" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "posicao_fila" SET NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "nome_completo",
DROP COLUMN "senha_hash",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
