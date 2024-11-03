import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
    //create one
//   const usercreation = await prisma.user.create({
//     data : {
//         email : "example2@prisma.com",
//         role : "CUSTOMER"
//     }
//   })


//create meny users
// const menyusercreation = await prisma.user.createMany({
//     data : [
//         {
//             email : "ali@gmail.com", role : "CUSTOMER"},
//         {email: "faa@gmail.com", role : "SELLER"},
//         {email : "admin@gmail.com", role : "ADMIN"}
//     ]
// })


//create meny categoris
// const category = await prisma.category.createMany({
//     data : [
//       {name : "Eletronic"},
//       {name : "Home & KItchen"},
//       {name : "Electronic Service"},
//       {name : "Creation Service"}
//     ],
//     skipDuplicates: true
// })


//create products
// const menyProducts = await prisma.product.createMany({
//     data : [
//         {name : "jeans",
//             description : "Denim , blue",
//             price: 49.99,
//             stock: 70,
//             categoryId: 2
//         },
//         {
//             name : "Head Phones",
//             description: "Noise-canceling",
//         price: 129.99,
//         stock: 30,
//         categoryId: 1
//             }
//     ]
// })


//create orders
// const orderMeny = await prisma.order.createMany({
//     data: [
//         {
//             date: new Date("2024-01-15"),
//             userId: 1
//         },
//         {
//             date: new Date("2024-02-10"),
//             userId: 6
//         },
//         {
//             date: new Date("2024-02-15"),
//             userId: 7
//         },
//         {
//             date: new Date("2024-03-01"),
//             userId: 8
//         }
//     ]
// });



//   console.log(orderMeny);
};

main();