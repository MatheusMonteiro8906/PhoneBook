import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    for (let i = 1; i <= 16; i++) {
        await prisma.user.create({
            data: {
                name: `usuário ${i}`,
                phones: {
                    create: [
                        { number: `1234567823${i}` },
                        { number: `9876543217${i}` },
                    ],
                },
            },
        });
    }
}

main()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });