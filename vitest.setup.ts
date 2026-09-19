import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./test/mocks/http-requests.mocks.js";

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())