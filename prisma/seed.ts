import { PrismaClient, answerType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create a QuestionPaper with Sections and Questions
    const questionPaper = await prisma.questionPaper.create({
        data: {
            title: "Computer Science and Information Technology - Set 1",
            subTitle: "Organizing Institute: IISc Bengaluru",
            time: 120,
            noOfQuestions: 2,
            noOfSections: 2,
            year: "2024",
            totalSubmissions: 0,
            Section: {
                create: [
                    {
                        title: "General Aptitude",
                        subTitle: "One-mark and Two-mark questions",
                        noOfQuestions: 2,
                        answerType: "MCQ",
                        Question: {
                            create: [
                                {
                                    question: "If ‘→’ denotes increasing order of intensity, then the meaning of the words [dry → arid → parched] is analogous to [diet → fast → ________ ].",
                                    answerType: answerType.MCQ,
                                    options: ["starve", "reject", "feast", "deny"],
                                    mcqAnswer: 3, // "feast" is the correct answer
                                },
                                {
                                    question: "If two distinct non-zero real variables x and y are such that (x + y) is proportional to (x − y), then the value of x/y is:",
                                    answerType: answerType.MCQ,
                                    options: ["depends on xy", "depends only on x and not on y", "depends only on y and not on x", "is a constant"],
                                    mcqAnswer: 3, // "is a constant" is the correct answer
                                },
                                {
                                    question: "Consider the following sample of numbers:\n 9, 18, 11, 14, 15, 17, 10, 69, 11, 13 \n The median of the sample is",
                                    answerType: answerType.MCQ,
                                    options: ["13.5", "14", "11", "18.7"],
                                    mcqAnswer: 3,
                                },
                                {
                                    question: "The number of coins of ₹1, ₹5, and ₹10 denominations that a person has are in the ratio 5:3:13. Of the total amount, the percentage of money in ₹5 coins is",
                                    answerType: answerType.MCQ, // assuming 'answerType' is predefined elsewhere
                                    options: ["21%", "14 2/7%", "10%", "30%"],
                                    mcqAnswer: -1,
                                },
                                {
                                    question: "For positive non-zero real variables p and q, if log (p^2 + q^2) = log p + log q + 2 log 3, then, the value of p^4 + q^4 / p^2 q^2 is",
                                    answerType: answerType.MCQ,
                                    options: ["79", "81", "9", "83"],
                                    mcqAnswer: -1,
                                },
                                // this ones carry different marking patterns, 
                                {
                                    question: "In the given text, the blanks are numbered (i)−(iv). Select the best match for all the blanks.\n\nSteve was advised to keep his head (i) before heading (ii) to bat; for, while he had a head (iii) batting, he could only do so with a cool head (iv) his shoulders.",
                                    answerType: answerType.MCQ,
                                    options: ["(i) down (ii) down (iii) on (iv) for", "(i) on (ii) down (iii) for (iv) on", "(i) down (ii) out (iii) for (iv) on", "(i) on (ii) out (iii) on (iv) for"],
                                    mcqAnswer: -1,
                                },
                                {
                                    question: "A rectangular paper sheet of dimensions 54 cm × 4 cm is taken. The two longer edges of the sheet are joined together to create a cylindrical tube. A cube whose surface area is equal to the area of the sheet is also taken. Then, the ratio of the volume of the cylindrical tube to the volume of the cube is",
                                    answerType: answerType.MCQ,
                                    options: ["1/π", "2/π", "3/π", "4/π"],
                                    mcqAnswer: -1,
                                },
                                {
                                    question: "A rectangular paper of 20 cm × 8 cm is folded 3 times. Each fold is made along the line of symmetry, which is perpendicular to its long edge. The perimeter of the final folded sheet (in cm) is",
                                    answerType: answerType.MCQ,
                                    options: ["18", "24", "20", "21"],
                                    mcqAnswer: -1,
                                },
                                {
                                    question: "The least number of squares to be added in the figure to make AB a line of symmetry is",
                                    answerType: answerType.MCQ,
                                    options: ["6", "4", "5", "7"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Let f: ℝ → ℝ be a function such that f(x) = max{x, x^3}, x ∈ ℝ, where ℝ is the set of all real numbers. The set of all points where f(x) is NOT differentiable is",
                                    answerType: answerType.MCQ,
                                    options: ["{−1, 1, 2}", "{−2, −1, 1}", "{0, 1}", "{−1, 0, 1}"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "The product of all eigenvalues of the matrix [1 2 3; 4 5 6; 7 8 9] is",
                                    answerType: answerType.MCQ,
                                    options: ["−1", "0", "1", "2"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Consider a system that uses 5 bits for representing signed integers in 2’s complement format. In this system, two integers A and B are represented as A=01010 and B=11010. Which one of the following operations will result in either an arithmetic overflow or an arithmetic underflow?",
                                    answerType: answerType.MCQ,
                                    options: ["A + B", "A − B", "B − A", "2 * B"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.14 Consider a permutation sampled uniformly at random from the set of all permutations of {1, 2, 3, ⋯ , n} for some n ≥ 4. Let X be the event that 1 occurs before 2 in the permutation, and Y the event that 3 occurs before 4. Which one of the following statements is TRUE?",
                                    answerType: answerType.MCQ,
                                    options: ["The events X and Y are mutually exclusive", "The events X and Y are independent", "Either event X or Y must occur", "Event X is more likely than event Y"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.15 Which one of the following statements is FALSE?",
                                    answerType: answerType.MCQ,
                                    options: ["In the cycle stealing mode of DMA, one word of data is transferred between an I/O device and main memory in a stolen cycle", "For bulk data transfer, the burst mode of DMA has a higher throughput than the cycle stealing mode", "Programmed I/O mechanism has a better CPU utilization than the interrupt driven I/O mechanism", "The CPU can start executing an interrupt service routine faster with vectored interrupts than with non-vectored interrupts"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.16 A user starts browsing a webpage hosted at a remote server. The browser opens a single TCP connection to fetch the entire webpage from the server. The webpage consists of a top-level index page with multiple embedded image objects. Assume that all caches (e.g., DNS cache, browser cache) are all initially empty. The following packets leave the user’s computer in some order. (i) HTTP GET request for the index page (ii) DNS request to resolve the web server’s name to its IP address (iii) HTTP GET request for an image object (iv) TCP SYN to open a connection to the web server. Which one of the following is the CORRECT chronological order (earliest in time to latest) of the packets leaving the computer ?",
                                    answerType: answerType.MCQ,
                                    options: ["(iv), (ii), (iii), (i)", "(ii), (iv), (iii), (i)", "(ii), (iv), (i), (iii)", "(iv), (ii), (i), (iii)"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.17 Given an integer array of size N, we want to check if the array is sorted (in either ascending or descending order). An algorithm solves this problem by making a single pass through the array and comparing each element of the array only with its adjacent elements. The worst-case time complexity of this algorithm is",
                                    answerType: answerType.MCQ,
                                    options: ["both O(N) and Ω(N)", "O(N) but not Ω(N)", "Ω(N) but not O(N)", "neither O(N) nor Ω(N)"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.18 Consider the following C program: #include <stdio.h> int main(){ int a = 6; int b = 0; while(a < 10) { a = a / 12 + 1; a += b;} printf(”%d”, a); return 0;}. Which one of the following statements is CORRECT?",
                                    answerType: answerType.MCQ,
                                    options: ["The program prints 9 as output", "The program prints 10 as output", "The program gets stuck in an infinite loop", "The program prints 6 as output"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.19 Consider the following C program: #include <stdio.h> void fX(); int main(){ fX(); return 0;} void fX(){ char a; if((a=getchar()) != '\\n') fX(); if(a != '\\n') putchar(a);}. Assume that the input to the program from the command line is 1234 followed by a newline character. Which one of the following statements is CORRECT?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "The program will not terminate",
                                        "The program will terminate with no output",
                                        "The program will terminate with 4321 as output",
                                        "The program will terminate with 1234 as output"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.20 Let S be the specification: \"Instructors teach courses. Students register for courses. Courses are allocated classrooms. Instructors guide students.\" Which one of the following ER diagrams CORRECTLY represents S?",
                                    answerType: answerType.MCQ,
                                    options: ["(i)", "(ii)", "(iii)", "(iv)"],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.21 In a B+ tree, the requirement of at least half-full (50%) node occupancy is relaxed for which one of the following cases?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "Only the root node",
                                        "All leaf nodes",
                                        "All internal nodes",
                                        "Only the leftmost leaf node"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.22 Which of the following statements about a relation R in first normal form (1NF) is/are TRUE?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "R can have a multi-attribute key",
                                        "R cannot have a foreign key",
                                        "R cannot have a composite attribute",
                                        "R cannot have more than one candidate key"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.23 Let L1, L2 be two regular languages and L3 a language which is not regular. Which of the following statements is/are always TRUE?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "L1 = L2 if and only if L1 ∩ L2̅ = 𝜙",
                                        "L1 ∪ L3 is not regular",
                                        "L3̅ is not regular",
                                        "L1̅ ∪ L2̅ is regular"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.24 Which of the following statements about threads is/are TRUE?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "Threads can only be implemented in kernel space",
                                        "Each thread has its own file descriptor table for open files",
                                        "All the threads belonging to a process share a common stack",
                                        "Threads belonging to a process are by default not protected from each other"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.25 Which of the following process state transitions is/are NOT possible?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "Running to Ready",
                                        "Waiting to Running",
                                        "Ready to Waiting",
                                        "Running to Terminated"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.26 Which of the following is/are Bottom-Up Parser(s)?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "Shift-reduce Parser",
                                        "Predictive Parser",
                                        "LL(1) Parser",
                                        "LR Parser"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.27 Let A and B be two events in a probability space with P(A) = 0.3, P(B) = 0.5, and P(A ∩ B) = 0.1. Which of the following statements is/are TRUE?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "The two events A and B are independent",
                                        "P(A ∪ B) = 0.7",
                                        "P(A ∩ B̅) = 0.2, where B̅ is the complement of the event B",
                                        "P(A̅ ∩ B̅) = 0.4, where A̅ and B̅ are the complements of the events A and B, respectively"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.28 Consider the circuit shown below where the gates may have propagation delays. Assume that all signal transitions occur instantaneously and that wires have no delays. Which of the following statements about the circuit is/are CORRECT?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "With no propagation delays, the output Y is always logic Zero",
                                        "With no propagation delays, the output Y is always logic One",
                                        "With propagation delays, the output Y can have a transient logic One after X transitions from logic Zero to logic One",
                                        "With propagation delays, the output Y can have a transient logic Zero after X transitions from logic One to logic Zero"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.29 TCP client P successfully establishes a connection to TCP server Q. Let NP denote the sequence number in the SYN sent from P to Q. Let NQ denote the acknowledgement number in the SYN ACK from Q to P. Which of the following statements is/are CORRECT?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "The sequence number NP is chosen randomly by P",
                                        "The sequence number NP is always 0 for a new connection",
                                        "The acknowledgement number NQ is equal to NP",
                                        "The acknowledgement number NQ is equal to NP + 1"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.30 Consider a 5-stage pipelined processor with Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB) stages. Which of the following statements about forwarding is/are CORRECT?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "In a pipelined execution, forwarding means the result from a source stage of an earlier instruction is passed on to the destination stage of a later instruction",
                                        "In forwarding, data from the output of the MEM stage can be passed on to the input of the EX stage of the next instruction",
                                        "Forwarding cannot prevent all pipeline stalls",
                                        "Forwarding does not require any extra hardware to retrieve the data from the pipeline stages"
                                    ],
                                    mcqAnswer: -1
                                },
                                {
                                    question: "Q.31 Which of the following fields is/are modified in the IP header of a packet going out of a network address translation (NAT) device from an internal network to an external network?",
                                    answerType: answerType.MCQ,
                                    options: [
                                        "Source IP",
                                        "Destination IP",
                                        "Header Checksum",
                                        "Total Length"
                                    ],
                                    mcqAnswer: -1
                                },


                            ],
                        },
                    },
                    {
                        title: "Technical Section",
                        subTitle: "One-mark questions",
                        noOfQuestions: 2,
                        answerType: "FIB",
                        Question: {
                            create: [
                                {
                                    question: "The sun rises in the ____.",
                                    answerType: answerType.FIB,
                                    fibAnswer: "east",
                                },
                                {
                                    question: "Fill in the blank: The capital of India is ____.",
                                    answerType: answerType.FIB,
                                    fibAnswer: "New Delhi",
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });

    console.log("Database seeded with QuestionPaper:", questionPaper);
}

main()
    .then(() => {
        console.log("Seeding completed.");
        prisma.$disconnect();
    })
    .catch((error) => {
        console.error("Error seeding the database:", error);
        prisma.$disconnect();
        process.exit(1);
    });
