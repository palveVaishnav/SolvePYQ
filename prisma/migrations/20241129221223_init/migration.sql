/*
  Warnings:

  - You are about to drop the column `marks` on the `Exam` table. All the data in the column will be lost.
  - The `correctAnsIndex` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `Name` on the `User` table. All the data in the column will be lost.
  - Added the required column `subjectId` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "marks",
ALTER COLUMN "attemptedBy" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "correctAnsIndex",
ADD COLUMN     "correctAnsIndex" INTEGER;

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "subjectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
