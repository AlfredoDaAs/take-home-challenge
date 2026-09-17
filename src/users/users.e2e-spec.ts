import request from 'supertest';
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { UsersModule } from "./users.module.js";


describe('UserController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [UsersModule]
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it('/users (GET)', () => {
        return request(app.getHttpServer())
        .get('/users')
        .expect(200);
    });

    afterAll(async () => {
        await app.close();
    });
});