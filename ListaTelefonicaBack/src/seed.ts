import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Nome do Usuário página 2',
            phones: {
                create: [
                    { number: '12345678922' },
                    { number: '98765432122' },
                ],
            },
        },
    });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });