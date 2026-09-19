import { TestingModule } from "@nestjs/testing"
import { BadRequestException, INestApplication, ValidationError, ValidationPipe } from "@nestjs/common";

export const initTestApp = async (moduleFixture: TestingModule): Promise<INestApplication> => {
    const app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        exceptionFactory: (validationErrors: ValidationError[]) => {
            return new BadRequestException(validationErrors);
        }
    }));

    return app.init();
}