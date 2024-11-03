import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const allUsers = await prisma.user.findMany({
  //     where : {role : "CUSTOMER"}
  // });
  // console.log(allUsers);

  // const findFirst = await prisma.user.findFirst({
  //     orderBy : {id : "asc"},
  //     where : {role : "CUSTOMER"}
  // })

  // const uniqeData = await prisma.user.findUniqueOrThrow({
  //     where : {id: 1}
  // })

  // const orderWithProducts = await prisma.order.findMany({
  //     include: {products: true}
  // })

  // const expenisveProducts = await prisma.product.findMany({
  //         where: {price: {gt: 400}}
  // })

//   const orderWithProdut = await prisma.order.findMany({
//     include: { products: true },
//     where: { id: { in: [7] } },
//   });

// const productInArr = await prisma.product.findMany({
//     where : {id : {in: [1, 2, 3]}}
// })

//paigenate
// const allProducts = await prisma.product.findMany({
//     orderBy: {id : "asc"},
//     cursor: {id : 4},
//     skip : 2,
//     take: 3
// })
//   console.log(allProducts);
}

main();
