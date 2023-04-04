import { PrismaClient } from '@prisma/client';
import { items } from './items';

const prisma = new PrismaClient();

async function main() {
	await prisma.buyersOnSaleItem.deleteMany();
	await prisma.buyer.deleteMany();
	await prisma.image.deleteMany();
	await prisma.saleItem.deleteMany();
	for (const item of items) {
		const { title, description, x, y, z, price, images } = item;
		const createdItem = await prisma.saleItem.create({
			data: {
				title,
				description,
				x,
				y,
				z,
				price,
			},
		});
		for (const image of images) {
			await prisma.image.create({
				data: {
					itemId: createdItem.id,
					src: image.src,
				},
			});
		}
	}
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
