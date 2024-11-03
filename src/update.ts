import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const updateOrder = await prisma.order.update({
    //     where : {id : 7},
    //     data : {products : {
    //         connect : [
    //             {id : 1}, {id :2}, {id: 3}, {id : 4}
    //         ]
    //     }}
    // })

    // console.log(updateOrder)
}

main();