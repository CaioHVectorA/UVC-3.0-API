import request from 'supertest'
import { app } from '../src'
import { BASES64_EXAMPLES, user_mockup } from '../src/utils/mockups'

describe('Rotas de usuário devem funcionar corretamente', () => {
    let password;
    let userid: string;
    test('Deve Criar usuário com sucesso', async () => {
        const response = await request(app).post('/user/').send(user_mockup)
        password = user_mockup.password
        userid = response.body.id
        expect(response.statusCode).toBe(201)
    })
    test('Deve logar com sucesso', async () => {
        const response = await request(app).post('/login/').send(user_mockup)
        expect(response.statusCode).toBe(200)
    })
    test('Não deve logar com sucesso - erro de senha', async () => {
        const response = await request(app).post('/login/').send({
            username: user_mockup.username,
            password: 'kdljadksl'
        })
        expect(response.statusCode).toBe(400)
    })
    test('Deve mudar a imagem de usuário', async () => {
        const response = await request(app).put('/user/'+userid).send({
            image_path: BASES64_EXAMPLES[Math.floor(Math.random() * BASES64_EXAMPLES.length)]
        })
        expect(response.statusCode).toBe(200)
    })
    test('Deve deletar o usuário com sucesso!', async () => {
        const response = await request(app).delete('/user/' + userid)
        expect(response.statusCode).toBe(200)
    })
})