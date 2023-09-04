import request from "supertest"
import { app } from "../src"
import { newsArray } from "../src/utils/mockups"
import { prisma } from "../src/prisma.client"
describe('As rotas de notícias devem funcionar corretamente', () => {
    // afterAll(() => {
    //     done()
    // })
    // afterAll(async () => {
    //     await prisma.$disconnect()
    // })
    test('Deve criar uma notícia com sucesso 1', async () => {
        const response = await request(app).post('/News/').send(newsArray[0])
        expect(response.statusCode).toBe(200)
    })
    test('Deve criar uma notícia com sucesso 2', async () => {
        const response = await request(app).post('/News/').send(newsArray[1])
        expect(response.statusCode).toBe(200)
    })
    test('Deve criar uma notícia com sucesso 3', async () => {
        const response = await request(app).post('/News/').send(newsArray[2])
        expect(response.statusCode).toBe(200)
    })
    test('Deve receber todos os avisos com sucesso, tendo a array com os três avisos.', async () => {
        const response = await request(app).get('/News/')
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(3)
    })
    test('Deve deletar todos os avisos com sucesso!', async () => {
        const response = await request(app).delete('/News/')
        expect(response.statusCode).toBe(200)
    })
})