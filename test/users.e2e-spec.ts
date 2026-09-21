import request from 'supertest';
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from '../src/app.module.js';
import { DataSource } from 'typeorm';
import { UserRepository } from '../src/users/users.repository.js';
import { users } from './mocks/http-requests.mocks.js';
import { initTestApp } from './helpers/test-helper.js';
import { v4 as uuid } from 'uuid';

describe('UserController (e2e)', () => {
    let app: INestApplication;
    let dataSource: DataSource;
    let userRepository: UserRepository;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = await initTestApp(moduleFixture);

        dataSource = moduleFixture.get<DataSource>(DataSource);
        userRepository = await moduleFixture.resolve(UserRepository);
    });

    it('/users (GET) empty', async () => {
        const response = await request(app.getHttpServer())
            .get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([]);
        expect(response.body).toHaveLength(0);
    });

    it('/users (GET) with users', async () => {
        await userRepository.create(users[0]);
        await userRepository.create(users[1]);

        const response = await request(app.getHttpServer())
            .get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
    });

    it('/users (POST) create a user', async () => {
        const response = await request(app.getHttpServer())
            .post('/users')
            .send(users[0]);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        expect(response.body).toHaveProperty('username', 'Alfredo');
        expect(response.body).toHaveProperty('email', 'alfredo@example.com');
        expect(response.body).toHaveProperty('password', 'password123');
        expect(response.body).toHaveProperty('pokemonIds', [1]);
    });

    it('/users (POST) fail to create a user with missing fields', async () => {
        const response = await request(app.getHttpServer())
            .post('/users')
            .send({
                "email": "alfredo@example.com",
                "pokemonIds": [
                    1,
                ]
            });

        expect(response.status).toBe(400);
    });

    it('/users/{id} (GET)', async () => {
        const user = await userRepository.create(users[2]);

        const response = await request(app.getHttpServer())
            .get(`/users/${user.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            id: user.id,
            username: 'Alfredo3',
            email: 'alfredo3@example.com',
            password: 'password123',
            pokemonIds: [1, 2, 3],
            pokemon: [
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
            ]
        });
    });

    it('/users/{id} (GET) not found user', async () => {
        const notFoundId = uuid();

        const response = await request(app.getHttpServer())
            .get(`/users/${notFoundId}`);

        expect(response.status).toBe(404);
    });

    it('/users/{id} PUT', async () => {
        const user = await userRepository.create(users[0]);

        const response = await request(app.getHttpServer())
            .put(`/users/${user.id}`)
            .send({
                username: 'updated',
                email: 'updated@example.com',
                password: 'Updated123',
                pokemonIds: [1, 2, 3]
            });

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            id: user.id,
            username: 'updated',
            email: 'updated@example.com',
            password: 'Updated123',
            pokemonIds: [1, 2, 3]
        });
    });

    it('/users/{id} PUT user not found', async () => {
        const notFoundId = uuid();

        const response = await request(app.getHttpServer())
            .put(`/users/${notFoundId}`)
            .send({
                username: 'updated',
                email: 'updated@example.com',
                password: 'Updated123',
                pokemonIds: [1, 2, 3]
            });

        expect(response.status).toBe(404);
    });

    it('/users/{id} DELETE', async () => {
        const user = await userRepository.create(users[0]);

        const response = await request(app.getHttpServer())
            .delete(`/users/${user.id}`);

        expect(response.status).toBe(200);
    });

    it('/users/{id} DELETE user not found', async () => {
        const notFoundId = uuid();

        const response = await request(app.getHttpServer())
            .delete(`/users/${notFoundId}`);

        expect(response.status).toBe(404);
    });

    afterEach(async () => {
        await dataSource.synchronize(true);
    });

    afterAll(async () => {
        await dataSource.destroy();
        await app.close();
    });
});