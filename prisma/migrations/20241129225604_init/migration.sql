/*
  Warnings:

  - You are about to drop the column `Instructions` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `attemptedBy` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `maxMarks` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `totalQuestions` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `examId` on the `Subject` table. All the data in the column will be lost.
  - Added the required column `paperId` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_examId_fkey";

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "Instructions",
DROP COLUMN "attemptedBy",
DROP COLUMN "maxMarks",
DROP COLUMN "time",
DROP COLUMN "totalQuestions",
ADD COLUMN     "students" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "examId",
ADD COLUMN     "paperId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Paper" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "maxMarks" INTEGER NOT NULL,
    "attemptedBy" INTEGER NOT NULL DEFAULT 0,
    "totalQuestions" INTEGER NOT NULL,
    "Instructions" TEXT NOT NULL,
    "examId" TEXT NOT NULL,

    CONSTRAINT "Paper_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Paper" ADD CONSTRAINT "Paper_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
