import { PrismaClient } from "../../prisma/generated/prisma";

async function poolAddressExists(prisma: PrismaClient, poolAddress: string): Promise<Boolean> {
  const res = await prisma.pool.findFirst({
    where: {
      poolAddress
    }
  });

  if (res) {
    return true;
  } else {
    return false;
  }
}

export default poolAddressExists;
