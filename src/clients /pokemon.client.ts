import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { IPokemon } from "./interface/pokemon.interface.js";
import { AxiosResponse } from "axios";

export interface PokemonDetails {
    id: number;
    name: string;
}

@Injectable()
export class PokemonClient {
    private readonly baseUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService
    ) {
        this.baseUrl = this.configService.get<string>('POKEMON_API_URL', 'https://pokeapi.co/api/v2');
    }

    async getPokemonById(id : number): Promise<PokemonDetails> {
        try {
            const url = `${this.baseUrl}/pokemon/${id}`;

            const response: AxiosResponse<IPokemon> = await firstValueFrom(this.httpService.get(url));

            return {
                id: response.data.id,
                name: response.data.name
            }
        } catch (error) {
            throw new Error('Failed to fetch Pokémon details');
        }
    }

    async getPokemonDetailsByIds(ids: number[]): Promise<PokemonDetails[]> {
        if (ids.length === 0) return [];

        const promises = ids.map((id) => this.getPokemonById(id));
        const pokemonResults = await Promise.all(promises);

        return pokemonResults.filter((pokemon) => pokemon !== null) as PokemonDetails[];
    }
}