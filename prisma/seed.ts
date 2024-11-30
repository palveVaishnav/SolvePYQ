import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const exam = await prisma.exam.create({
        data: {
            name: "JEE Advance",
            Paper: {
                create: [
                    {
                        name: "JEE Mains 2023 January - Shift 1",
                        time: 180,
                        maxMarks: 360,
                        totalQuestions: 90,
                        Instructions: "Please read the instructions carefully before starting.",
                        Subject: {
                            create: [
                                {
                                    name: "Physics",
                                    Section: {
                                        create: [
                                            {
                                                name: "Section A",
                                                Question: {
                                                    create: [
                                                        {
                                                            questionNumber: 1,
                                                            questionText: "What is Newton's Second Law?",
                                                            questionImage: null,
                                                            options: ["F = ma", "E = mc²", "P = mv", "F = Gm1m2/r²"],
                                                            optionImage: null,
                                                            correctAnsIndex: 0,
                                                        }
                                                    ],
                                                },
                                            },
                                            {
                                                name: "Section B",
                                                Question: {
                                                    create: [
                                                        {
                                                            questionNumber: 1,
                                                            questionText: "Find the velocity of an object dropped from a height of 20m after 2 seconds.",
                                                            questionImage: null,
                                                            options: [],
                                                            optionImage: null,
                                                            correctAnsText: "Approximately 19.6 m/s",
                                                        }
                                                    ],
                                                },
                                            }
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });
    console.log("Seeding is complete:", exam);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error("Error during seeding:", e);
        await prisma.$disconnect();
        process.exit(1);
    });
