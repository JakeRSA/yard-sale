import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const saleItems = await prisma.saleItem.findMany()
	console.log(saleItems)
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
