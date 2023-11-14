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

    public async getTotalUsers(): Promise<number> {
        return await this.prisma.user.count();
    }

    public async getTotalPages(): Promise<number> {
        const pageSize = 5;
        const totalUsers = this.getTotalUsers();
        return Math.ceil(await totalUsers / pageSize);
    }

    public async getPaginatedUsers(page: number = 0) {
        const pageSize = 5;

        const users = this.prisma.user.findMany({
            skip: page * pageSize,
            take: pageSize,
            include: { phones: true } // Eu poderia remover os includes de phones de todos os métodos, mas, por motivos de demonstração do DTO, eu mantive 
        });

        return users;
    }


}