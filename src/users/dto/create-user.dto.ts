import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ description: 'The username of the user', type: String })
    username: string;
    @ApiProperty({ description: 'The email of the user', type: String })
    email: string;
    @ApiProperty({ description: 'The password of the user', type: String })
    password: string;
}
