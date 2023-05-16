import request from 'supertest'
import createServer from "../../app";
describe('', function () {
    let app: any;
    beforeAll(async () => {
        app = await createServer()
    })
    test('/health should respond with 200 success', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
    })
    test('GET /users should respond with 200 success', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
    }, 15000)
});
