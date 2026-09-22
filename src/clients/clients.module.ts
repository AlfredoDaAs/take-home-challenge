import { Module } from "@nestjs/common";
import { PokemonClient } from "./pokemon.client.js";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    providers: [PokemonClient],
    exports: [PokemonClient]
})
export class ClientsModule {}