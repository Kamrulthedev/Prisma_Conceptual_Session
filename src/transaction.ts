import { PrismaClient, UserRole } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
//   const CreateOrder = await prisma.order.create({
//     data : {
//         userId : 9,
//         date: new Date("2024-10-15"),
//     }
//   })

// const CreateUser = prisma.user.create({
//     data : {
//         email: "d1111d@gamil.com",
//         role : UserRole.CUSTOMER
//     }
// })

//   const profile = prisma.profile.create({
//     data : {
//         bio: "This is Bio",
//         userId: (await CreateUser).id
//     }
//   })

//   const [userResult, ProfileResult] = await prisma.$transaction([
//     CreateUser,
//     profile
//   ])

//   console.log(userResult, ProfileResult)


//interactive tansaction
const result = await prisma.$transaction(async (tx) => {
    const CreateUser = await tx.user.create({
    data : {
        email: "331111@gamil.com",
        role : UserRole.CUSTOMER
    }
})

  const profile = await tx.profile.create({
    data : {
        bio: "This is Bio",
        userId: CreateUser.id
    }
  })

  return {
    CreateUser,
    profile
  }
});

console.log(result);
};


main();