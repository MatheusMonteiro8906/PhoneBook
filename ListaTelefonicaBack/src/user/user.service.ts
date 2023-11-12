import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.user.findMany({ include: { phones: true } });
    }

    async findOne(id: number) {
        return this.prisma.user.findUnique({ where: { id }, include: { phones: true } });
    }


}