import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient({
    log : [
        {
            emit : "event",
            level : "query"
        }
    ]
});

prisma.$on("query", (e) => {
    console.log("Q", e)
});

prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  const time = after - before;
  console.log("time", time);
  console.log("model: ", params.action);

  return result;
});

async function main() {
  //delete Table
  //   const result = await prisma.$executeRaw `TRUNCATE TABLE "Profile" CASCADE`

  const result = await prisma.$executeRaw`SELECT * FROM "User"`;
  console.log(result);
}

main();
