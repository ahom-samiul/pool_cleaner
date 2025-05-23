import { PrismaClient } from "../prisma/generated/prisma";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `${process.env.DATABASE_URL}?connection_limit=20&pool_timeout=20`
    }
  }
})

export default prisma; 