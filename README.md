# SQL ou NoSQL

- SQL: Oracle, SQL Server, MySQL, Postgres, MariaDB, ...
- NoSQL: MongoDB, ArangoDB, CouchDB, CosmosDB, ...

> O DB sempre será um gargalo, un funil... por padrão ele será sempre mais lento do que escrita em disco.

### SQL

1. SQL normalmente será utilizado quando sabemos o formato dos dados (schema).
2. ATOMICIDADE bem definida (query, insert, update, delete).
3. MATURIDADE por estar a mais tempo no mercado.
4. DEPLOY mais facilitado

### NoSQL

1. NoSQL normalmente será utilizado quando não sabemos o formato dos dados.
2. Quem define o schema é a aplicação e não o a estrutura do banco de dados.
3. ESCALAR muito mais rápido do que SQL
3. VELOCIDADE DE LEITURA E DE GRAVAÇÃO naturalmente superior
4. DEPLOY mais moroso

> A escolha vai depender do tipo da aplicação que será desenvolvida.

## FORMAS DE ESCREVER SQL COM NODEJS

1. Driver padrão: SQL (texto)
2. ORM (object relational mapping): objetos persistidos no banco e os drivers (mysql/mysql2 ou sequelize) fazem a leitura. É necessário respeitar a relação entre os objetos (schema).
3. Query Builder: chamadas de métodos ou funções que evitam SQL INJECTION (limpeza de dados após o envio dos mesmos). Um exemplo de driver e o KNEXJS (maneira um pouco diferente e mais segura de se escrever SQL)
