import { Controller, Get, Param, NotFoundException, Res, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @HttpCode(200)
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @HttpCode(200)
    @Get(':id/phone_numbers')
    async findOne(@Param('id') id: string, @Res() response) {
        try {
            const user = await this.userService.findOne(+id);

            if (user) {
                const phoneNumbers = user.phones.map(phone => ({
                    id: phone.id,
                    number: phone.number,
                    userId: phone.userId,
                }));

                return response.send(phoneNumbers);
            } else {
                return response.status(404).send(`User with id ${id} not found`);
            }
        } catch (error) {
            return response.status(400).send(`Error retrieving user with id ${id}`);
        }
    }
    // @Post()
    // create(@Body() data: { nome: string }) {
    //     return this.userService.create(data);
    // }

}
