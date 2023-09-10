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
type mockup_user = Omit<User, 'id' | 'created_at' | 'updated_at' | 'image_path'>
export const user_mockup: mockup_user = {
    username: 'Teste_Testing',
    password: 'Testou',
}

export const BASES64_EXAMPLES = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVQ4T31TsU5CQRC8FyUhEEJBYtCS3saOxoYGv4EQC0sbK1tCa2VjaWEI3yANjQ2djT2lEhMKQiAkaM7McLu5u3fPa97d7ezszO67zPy/rAtnRTAJpIDWjkbMy/p9fjwSxSsBwA5IHM6/kwn3R91uLiakSvDT6xH8Mp2aj/3e3Nfr5qTd5t33bGYeVitzXiqZ606Hd8fjMVUFsj5bLQZft1t+ryqV5PlsPldLAQFkfw0GTEJFqIj3p8Nh0JPAgpPFJKjxLbiqjMFubMEiAaCLapWg982GQPHr3wvW74F9bjbZIF/FXaNBgsflUicIUjT6ZrEImkgCLJCg65AvZEiSOyRj5Qgg8bZW0+7HdiBbpvO0XtNiboyQjFljfEUE+EecJQ4gGCNUXJbLJHES1TssIvltt9PqMQHOVlSIR8fAHsXVkwRQIf60/GFjU7HUM8VLK3q+udgfY4W3EYeq9aIAAAAASUVORK5CYIIA', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVQ4T6WTLU+DQQzHe1OMkOmZWRwvyyAkk0tAMcMHAItlYoRPQECAxcIHwAy1JZMkBAhvDouZJstAreTfPW16xwXDmbun1/76b3tPoH+u8Ec8J3dZ35xRApmZ+PtQGGHuhEIw1ygmBfD9eZVGzxPa7mwQL9ZngPcnujm7o+rqPK0fjMSk6jyA+WVT7A/DN9nXWkvZ77AyMEgMYCZ63ZIgZISK9EzLfS1HYhXA068ulcqn1jeo8SUUWeXe+VpnRD6cjloL4nQ8HIsjFsDerr4QYArQvMb+bqTCA1QabI8XV9bMCAAnQNB1yMcuIy3O2BGMpdMwACTutGfy0X2dhGb2tuveWEr0JUii3l5FZg1nTKF9+SnxsGMigOKNFPZoCgJQFQCkDUXjAPDZ/RgN0KyV/IuzseoLvf2YmvwUEEG8TC0vDc4BBFKk/fWf5Ow/2xOsEWd1fvgAAAAASUVORK5CYIIA', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVQ4T2NkoBAw4tH/H0kOpzpcEv/vqcxmULydwjBPtYgh+U4/yCysarEJgjWL68szcK1xZbivOodhP8M1nIagGwDXDLISZgCIjcsQZANQNKMbgMsQmAGYmu1lGRhyNRi+hexmeHnxITw80V0CN+D/pOuYEQI1AF2Ce60bPFDhBqTIeDFYcqjD1ToyaIHZIBuP/7gJF7/4/T7D6bdgy8B6UcIAmyFtP9bj1Iwtbv8jGwJyBcwAdJthpmJNBzBDYAbg0owzdTEwMIBdUsURyBD+vg/Fz+gBSrO8QHQexecCogwBAA6iaBHc0k26AAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVQ4T6WTPRLBQBTH37qCwkecQakyw+AAJurQO4DRGGM0xgH0omYcAMOMSukM4qNwBWve27zNJhIKWySb/77/730kEfDnEgl+GaPHxkZFMkr56RdCh4Y85oMk49ZVyevtoAhD80EfNGUeNZVpuFYghPDdODMhSAqbyzbAcRWA2BjRGaIAmzl4sz5YxRJ45xOZreVVt+C18krzz63uBESjgxJNRl7sHKCol9k/izwHAEpWWN00gAbvVjIU6gymFLB7vsDZ32FRzUItnaIEi3GPYtqHB5n1xU9CEA6mlpZXwPLRzFDTHAXoShBCPftG3GNFUXMcIAT5lplHk/gpYzs4D+w7LvMvAFWCb4enHbyi8C6pAo7Cn+JrzC9AUmKtvwEBz34RlykZ4QAAAABJRU5ErkJgggAA']