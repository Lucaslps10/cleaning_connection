import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

// Cria a piscina de conexões nativa do PostgreSQL (PostgreSQL client)
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// Passa o pool de conexões para o Adapter do Prisma
const adapter = new PrismaPg(pool);

// Inicializa o Prisma Client utilizando o adapter configurado
const prisma = new PrismaClient({ adapter });

export { prisma };