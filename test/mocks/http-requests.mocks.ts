import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { User } from '../../src/users/entities/user.entity.js';

export const pokemonList = [
    {
        id: 1,
        name: 'bulbasaur-test'
    },
    {
        id: 2,
        name: 'ivysaur-test'
    },
    {
        id: 3,
        name: 'venusaur-test'
    }
];

export const users = [
    {
        "username": "Alfredo",
        "email": "alfredo@example.com",
        "password": "password123",
        "pokemonIds": [
            1,
        ]
    },
    {
        "username": "Alfredo2",
        "email": "alfredo2@example.com",
        "password": "password123",
        "pokemonIds": [
            1,
            2
        ]
    },
    {
        "username": "Alfredo3",
        "email": "alfredo3@example.com",
        "password": "password123",
        "pokemonIds": [
            1,
            2,
            3
        ]
    }
] as User[];

export const restHandlers = [
    ...pokemonList.map(
        (pokemon) => http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`,
            () => HttpResponse.json({
                id: pokemon.id,
                name: pokemon.name
            })
        )
    ),
];

export const server = setupServer(...restHandlers);