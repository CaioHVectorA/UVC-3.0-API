import { User } from "@prisma/client";
import { New } from "../modules/News/DTOs/New";

export const newsArray: New[] = [
    {
        title: "Nova descoberta científica",
        body: "Cientistas descobrem uma nova espécie de borboleta na Amazônia.",
        image: "imagem1.jpg"
    },
    {
        title: "Evento de caridade beneficente",
        external_link: "https://exemplo.com/evento-caridade",
        image: "imagem2.jpg"
    },
    {
        title: "Anúncio de lançamento de produto",
        body: "A empresa XYZ anuncia o lançamento de seu novo smartphone revolucionário.",
        image: "imagem3.jpg"
    }
];
type mockup_user = Omit<User, 'id' | 'created_at' | 'updated_at'>
export const user_mockup: mockup_user = {
    username: 'Teste_Testing',
    password: 'Testou',
}