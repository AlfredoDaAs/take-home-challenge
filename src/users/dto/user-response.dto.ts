import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
    @ApiProperty({ description: 'The ID of the user', type: String, example: 'aeb10d4c-44b4-4025-a430-823a0e7959c2' })
    id: string;

    @ApiProperty({ description: 'The username of the user', type: String, example: 'Alfredo' })
    username: string;

    @ApiProperty({ description: 'The email of the user', type: String, example: 'alfredo@example.com' })
    email: string;
}