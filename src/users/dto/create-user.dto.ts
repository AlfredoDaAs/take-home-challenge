import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: 'The username of the user',
        type: String,
        example: 'Alfredo'
    })
    @IsString()
    username: string;

    @ApiProperty({
        description: 'The email of the user',
        type: String,
        example: 'alfredo@example.com'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        type: String,
        example: 'password123'
    })
    @IsString()
    password: string;

    @ApiProperty({
        description: 'The IDs of the Pokémon associated with the user',
        type: [Number],
        example: [1, 2, 3]
    })
    @IsArray()
    @IsInt({ each: true })
    pokemonIds: number[];
}
