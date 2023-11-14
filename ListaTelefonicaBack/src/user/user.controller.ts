import { Controller, Get, Param, Res, HttpCode, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';
import { UserPhoneNumberDto } from './dto/userPhone.dto';
import { ApiBasicAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiBasicAuth()
@Controller('users')
@ApiTags('usuários')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @HttpCode(200)
    @ApiOperation({ summary: 'Lista todos os usuários', description: 'Endpoint para obter uma lista de todos os usuários, ou, uma paginação de 5 usuários por vez' })
    @ApiQuery({ required: false, type: "string", name: "page" })
    @Get()
    async getUsers(@Res() response, @Query('page') page?: string) {
        try {
            if (page) {
                const users: User[] = await this.userService.getPaginatedUsers(+page);
                const usersDto: UserDto[] = users.map(UserDto.getUserDto);
                if (usersDto.length >= 1)
                    return response.send(usersDto);

                return response.status(204).send("No more user data to fetch");
            } else {
                const users: User[] = await this.userService.getAllUsers();
                const usersDto: UserDto[] = users.map(UserDto.getUserDto);
                if (usersDto.length >= 1)
                    return response.send(usersDto);

                return response.status(204).send("No user data to fetch");
            }
        } catch (error) {
            return response.status(422).send(`Error retrieving data`);
        }
    }

    @HttpCode(200)
    @ApiOperation({ summary: 'Lista todos os números relacionados ao usuário', description: 'Endpoint para obter uma lista de todos os números referentes ao usuário.' })
    @Get(':id/phone_numbers')
    async getUserPhoneNumbers(@Param('id') id: string, @Res() response) {
        try {
            const user = await this.userService.getOneUser(+id);
            if (user) {
                const phoneNumbers = user.phones.map(UserPhoneNumberDto.getUserPhones);
                return response.send(phoneNumbers);
            } else {
                return response.status(404).send(`User with id ${id} not found`);
            }
        } catch (error) {
            return response.status(422).send(`Error retrieving user with id ${id}`);
        }
    }
}