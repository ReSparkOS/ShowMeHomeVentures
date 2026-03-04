import { PrismaClient } from "@/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(): PrismaClient {
  const databaseUrl = process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      "Missing Turso connection URL. Set TURSO_DATABASE_URL (preferred) or DATABASE_URL."
    );
  }

  const authToken = process.env.TURSO_AUTH_TOKEN;
  const adapter = new PrismaLibSql({
    url: databaseUrl,
    authToken,
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
