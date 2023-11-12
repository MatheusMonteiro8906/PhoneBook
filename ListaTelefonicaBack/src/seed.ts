import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    for (let i = 1; i <= 16; i++) {
        await prisma.user.create({
            data: {
                name: `usuário ${i}`,
                phones: {
                    create: [
                        { number: `12345678922${i}` },
                        { number: `98765432122${i}` },
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