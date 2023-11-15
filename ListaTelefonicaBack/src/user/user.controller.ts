import { Controller, Get, Param, Res, HttpCode, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';
import { UserPhoneNumberDto } from './dto/userPhone.dto';
import { ApiBasicAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBasicAuth()
@Controller('users')
@ApiTags('usuários')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Users have been found successfully' })
    @ApiResponse({ status: 204, description: 'There is no user to search' })
    @ApiResponse({ status: 401, description: 'Api Key is incorrect' })
    @ApiResponse({ status: 422, description: 'Impossible to search users' })
    @ApiOperation({ summary: 'List all users', description: 'Endpoint to get a list of all users' })
    @ApiQuery({ required: false, type: "string", name: "page" })
    @Get()
    async getUsers(@Res() response, @Query('page') page?: string) {
        try {
            if (page) {
                const users: User[] = await this.userService.getPaginatedUsers(+page);
                const usersDto: UserDto[] = users.map(UserDto.getUserDto);
                const totalUsers = await this.userService.getTotalUsers();

                if (usersDto.length >= 1)
                    return response.send({ users: usersDto, totalUsers: totalUsers });

                return response.status(204).send("No more user data to fetch");
            }
            else {
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
    @ApiResponse({ status: 200, description: 'Phone numbers succesfully found' })
    @ApiResponse({ status: 401, description: 'Api Key is incorrect' })
    @ApiResponse({ status: 404, description: 'Searched Phone numbers not found' })
    @ApiResponse({ status: 422, description: 'Error searching phone numbers' })
    @ApiOperation({ summary: 'List all phone numbers related to the user provided', description: 'Endpoint to obtain a list of all phone numbers referring to the user' })
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