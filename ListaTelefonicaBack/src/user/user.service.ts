import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.user.findMany({ include: { phones: true } });
    }

    async findOne(id: number) {
        return this.prisma.user.findUnique({ where: { id }, include: { phones: true } });
    }

    async findSome(page: number = 0) {
        const pageSize = 5;

        const totalUsers = await this.prisma.user.count();
        const totalPages = Math.ceil(totalUsers / pageSize);
        const validPage = Math.min(page, totalPages - 1);

        const users = this.prisma.user.findMany({
            skip: validPage * pageSize,
            take: 5,
            include: { phones: true } //Eu poderia remover os includes de phones de todos os métodos, mas, por motivos de demonstração do DTO, eu mantive
        });

        return users;
    }


}