import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
    //count product
    // const productCount = await prisma.product.count();

    //average Price
    // const averagePrice = await prisma.product.aggregate({
    //     _avg : {price: true}
    // })

    //sum Price
    // const sumPrice  = await prisma.product.aggregate({
    //     _sum : {price :true}
    // })


    //max Price Product
    // const maxPrice = await prisma.product.aggregate({
    //     _max : {price :true}
    // })

  //group By Product
    const groupProduct = await prisma.product.groupBy({
        by : ["categoryId"],
        _count : {id : true}
    })
    console.log(groupProduct)
};

main();