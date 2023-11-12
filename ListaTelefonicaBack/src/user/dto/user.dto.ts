import { User } from "@prisma/client";
import { IsNumber, IsString, isNumber } from "class-validator";

export class UserDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;

    static getUserDto(user: User): UserDto {
        const userDto = new UserDto();
        userDto.name = user.name;
        userDto.id = user.id;
        return userDto;
    }
}