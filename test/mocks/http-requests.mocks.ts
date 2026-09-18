import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const restHandlers = [
    http.get('https://pokeapi.co/api/v2/pokemon/1', () => {
        return HttpResponse.json({
            id: 1,
            name: 'bulbasaur'
        })
    }),
    http.get('https://pokeapi.co/api/v2/pokemon/2', () => {
        return HttpResponse.json({
            id: 2,
            name: 'ivysaur'
        })
    }),
    http.get('https://pokeapi.co/api/v2/pokemon/3', () => {
        return HttpResponse.json({
            id: 3,
            name: 'venusaur'
        })
    })
];

export const server = setupServer(...restHandlers);