
import { Module, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';

const prisma = new PrismaClient();

@Global()
@Module({
    providers: [
        PrismaService,
        {
            provide: 'PRISMA',
            useValue: prisma,
        },
    ],
    exports: [PrismaService],
})
export class PrismaModule { }