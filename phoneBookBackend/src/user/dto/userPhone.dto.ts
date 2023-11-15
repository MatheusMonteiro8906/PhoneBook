import { UserPhoneNumber } from "@prisma/client";

export class UserPhoneNumberDto {
    id: number;
    number: string;

    static getUserPhones(user: UserPhoneNumber): UserPhoneNumberDto {
        const userPhoneNumberDto = new UserPhoneNumberDto();
        userPhoneNumberDto.number = user.number;
        userPhoneNumberDto.id = user.id;

        return userPhoneNumberDto;
    }

}