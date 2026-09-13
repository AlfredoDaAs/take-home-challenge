import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'The username of the user',
        type: String,
        example: 'Alfredo'
    })
    username: string;

    @ApiProperty({
        description: 'The email of the user',
        type: String,
        example: 'alfredo@example.com'
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        type: String,
        example: 'password123'
    })
    password: string;
}
