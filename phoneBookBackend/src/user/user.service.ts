import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getAllUsers() {
        return this.prisma.user.findMany({ include: { phones: true } });
    }

    async getOneUser(id: number) {
        return this.prisma.user.findUnique({ where: { id }, include: { phones: true } });
    }

    public async getTotalUsers(): Promise<number> {
        return await this.prisma.user.count();
    }

    public async getPaginatedUsers(page: number = 0) {
        const pageSize = 5;

        const users = this.prisma.user.findMany({
            skip: page * pageSize,
            take: pageSize,
            include: { phones: true } // I could remove the includes since i don't want to receive them on this request, but for demonstration reasons of DTO use, i left it here
        });

        return users;
    }


}