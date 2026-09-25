import { MigrationInterface, QueryRunner } from "typeorm";

export class Seed1790376679680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const users = [
            {
                username: 'alfredo',
                email: 'alfredo@example.com',
                password: 'pasword123',
                pokemonIds: '[1, 2, 3]'
            },
            {
                username: 'bruno',
                email: 'bruno@example.com',
                password: 'pasword123',
                pokemonIds: '[4, 5, 6]'
            },
            {
                username: 'patricio',
                email: 'patricio@example.com',
                password: 'pasword123',
                pokemonIds: '[7, 8, 39]'
            },
        ];


        for (const user of users) {
            await queryRunner.query(`
                INSERT INTO users (username, email, password, "pokemonIds")
                VALUES ('${user.username}', '${user.email}', '${user.password}', '${user.pokemonIds}')
                `)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM users WHERE
            username IN ('alfredo', 'bruno', 'patricio')`
        )
    }

}
