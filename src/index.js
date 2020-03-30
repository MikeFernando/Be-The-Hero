const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors)

app.listen(3333)

 /**
 * Rota / Recursos
 */
 /**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no bacnk-end
 */

 /**
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simblode "?"(Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
 * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


