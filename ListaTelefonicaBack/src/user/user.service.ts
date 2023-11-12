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

    // async create(data: { nome: string }) {
    //     return this.prisma.user.create({ data });
    // }
}