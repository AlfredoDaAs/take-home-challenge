import { ApiProperty } from "@nestjs/swagger";
import { PokemonDetails } from "../../clients/pokemon.client.js";

export class UserWithPokemonDto {
    @ApiProperty({
        description: 'The ID of the user',
        type: String,
        example: 'aeb10d4c-44b4-4025-a430-823a0e7959c2'
    })
    id: string;

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
        description: 'The IDs of the Pokémon associated with the user',
        type: [Number],
        example: [1, 2, 3]
    })
    pokemonIds: number[];

    @ApiProperty({
        description: 'The details of the Pokémon associated with the user',
        type: Array,
        example: [
            { id: 1, name: 'Bulbasaur' },
            { id: 2, name: 'Ivysaur' }
        ]
    })
    pokemon: PokemonDetails[];
}