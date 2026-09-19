import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { User } from '../../src/users/entities/user.entity.js';

export const pokemonList = [
    {
        id: 1,
        name: 'bulbasaur'
    },
    {
        id: 2,
        name: 'ivysaur'
    },
    {
        id: 3,
        name: 'venusaur'
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
    http.get('https://pokeapi.co/api/v2/pokemon/1', () => {
        return HttpResponse.json({
            id: 1,
            name: 'bulbasaur-test'
        })
    }),
    http.get('https://pokeapi.co/api/v2/pokemon/2', () => {
        return HttpResponse.json({
            id: 2,
            name: 'ivysaur-test'
        })
    }),
    http.get('https://pokeapi.co/api/v2/pokemon/3', () => {
        return HttpResponse.json({
            id: 3,
            name: 'venusaur-test'
        })
    })
];

export const server = setupServer(...restHandlers);