# Documentação da API do WebSite

Esta é a documentação da API do WebSite, que fornece endpoints para autenticação de usuários, gerenciamento de usuários, comentários e interações de "Like". A API é projetada para ser utilizada pelo sistema do seu WebSite.

## Endpoints

### User

#### `POST /login`

Envia uma solicitação de login com as credenciais do usuário. As credenciais devem ser fornecidas no corpo da solicitação (req.body).

#### `GET /user/:id`

Retorna as informações de um usuário específico com base no seu ID.

#### `POST /user`

Cria um novo usuário. As credenciais do usuário (username e password) devem ser fornecidas no corpo da solicitação (req.body).

#### `DELETE /user/:id`

Exclui um usuário com base no ID fornecido na URL.

#### `PUT /user/:id`

Atualiza os dados de um usuário. O ID do usuário deve ser fornecido na URL e você pode fornecer o username e/ou password no corpo da solicitação para atualização.

### Comentários

#### `POST /comment`

Cria um novo comentário. Os seguintes campos devem ser fornecidos no corpo da solicitação (req.body): content (conteúdo do comentário), comment_by (ID do usuário), comment_in (ref da história) e UsernameAuthor(Nome de usuário.)

#### `GET /comment/:ref`

Pega uma lista de comentários de uma determinada história com base na referência fornecida.

#### `DELETE /comment/:id`

Exclui um comentário com base no ID fornecido na URL.

#### `PUT /comment`

Edita um comentário existente. O ID do comentário deve ser fornecido na URL e o novo conteúdo deve ser fornecido no corpo da solicitação (req.body).

### Like

#### `POST /like/:histId`
Ativa ou desativa um "Like" em uma história específica, a partir de seu ID na req.params. Os seguintes campos devem ser fornecidos na solicitação: isLiked (valor booleano) e userId. Você também deve fornecer o ID de um comentário no caso de desativação.

### News


#### `GET /News/`
Retorna uma array de notícias. 
#### `POST /News/`
Cria uma notícia. A partir do Req.body, precisa das propriedades title e image, OBRIGATORIAMENTE. Ambos são strings. Além disso, há external_link e body; O external_link é um link externo e o body é o conteúdo de uma notícia. Importante: Se uma notícia tem um, não terá o outro, pois uma que tem body manda para um link interno do site. Portanto, ambas são opcionais, mas tem que se ter um deles a partir da intenção da notícia.
#### `PUT /News/:id`
Edita uma notícia. Pode receber todas as propriedades de forma opcional no req.body e necessita do ID na req.params
#### `Delete /News/:id`
Deleta uma notícia a partir do seu ID.
#### `Delete /News/`
Deleta todas as notícias