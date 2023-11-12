import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id/phone_numbers')
    async findOne(@Param('id') id: string) {
        try {
            const user = await this.userService.findOne(+id);

            if (user) {
                const phoneNumbers = user.phones.map(phone => ({
                    id: phone.id,
                    number: phone.number,
                    userId: phone.userId,
                }));

                return phoneNumbers;
            } else {
                throw new NotFoundException(`User with id ${id} not found`);
            }
        } catch (error) {
            throw new NotFoundException(`Error retrieving user with id ${id}`);
        }

    }
    // @Post()
    // create(@Body() data: { nome: string }) {
    //     return this.userService.create(data);
    // }

}
