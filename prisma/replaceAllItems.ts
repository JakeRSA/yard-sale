import { PrismaClient } from '@prisma/client';
import { items } from './items';

const prisma = new PrismaClient();

async function main() {
	await prisma.saleItem.deleteMany();
	await prisma.image.deleteMany();
	for (const item of items) {
		const { title, description, x, y, z, price, status, images } = item;
		const createdItem = await prisma.saleItem.create({
			data: {
				title,
				description,
				x,
				y,
				z,
				price,
				status,
			},
		});
		for (const image of images) {
			await prisma.image.create({
				data: {
					itemId: createdItem.itemId,
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
