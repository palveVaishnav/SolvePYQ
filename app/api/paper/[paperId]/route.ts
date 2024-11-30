import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { paperId } = params;
    try {
        const paper = await prisma.paper.findFirst({
            where: { id: paperId, },
            include: {
                Subject: {
                    include: {
                        Section: {
                            include: {
                                Question: true
                            }
                        }
                    }
                }
            }
        })
        if (!paper) {
            console.log('Check the fucking Id !!');
            return NextResponse.json({ error: "The Question Paper is not present, or something like that.." }, { status: 404 });
        }
        return NextResponse.json(paper)
    } catch (error) {
        console.error(error);
        process.exit(1);
        return NextResponse.json({ error: 'SHit went Down at fetching paper by id' }, { status: 666 })
    }
}