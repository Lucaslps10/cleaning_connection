const pg = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
// Busca o cliente da pasta customizada gerada na raiz
const { PrismaClient } = require('../../generated/prisma');
const dotenv = require('dotenv');

dotenv.config();

// Cria a piscina de conexões nativa do PostgreSQL
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// Passa o pool de conexões para o Adapter do Prisma
const adapter = new PrismaPg(pool);

// Inicializa o Prisma Client utilizando o adapter configurado
const prisma = new PrismaClient({ adapter });

// Exporta no formato CommonJS
module.exports = { prisma };
