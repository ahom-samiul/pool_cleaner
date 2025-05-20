import { PrismaClient } from "./prisma/generated/prisma";



// {
//         "PairAddress": "0xC53e453E4A6953887bf447162D1dC9E1e7f16f60",
//         "Token0Name": "Wrapped Ether",
//         "Token0Symbol": "WETH",
//         "Token0Decimals": 18,
//         "Token0Address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
//         "Token0Reserve": "0.01781839836400572",
//         "Token1Name": "USD Coin (Arb1)",
//         "Token1Symbol": "USDC",
//         "Token1Decimals": 6,
//         "Token1Address": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
//         "Token1Reserve": "32.166372"
// }

const path = "./data/apeswap_arbitrum.json"
const file = Bun.file(path);

const contents = await file.json(); 

const prisma = new PrismaClient(); 

contents.map((content: any) => {
    console.log("This is the content:", content)
})