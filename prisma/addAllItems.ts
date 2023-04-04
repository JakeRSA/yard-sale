import { PrismaClient } from '@prisma/client';
import { items } from './items';

const prisma = new PrismaClient();

async function main() {
	const saleItems = await prisma.saleItem.findMany();
	for (const item of items) {
		if (!saleItems.find((saleItem) => saleItem.itemId === item.itemId)) {
			const { title, description, x, y, z, price, status, images } = item;
			prisma.saleItem
				.create({
					data: {
						title,
						description,
						x,
						y,
						z,
						price,
						status,
					},
				})
				.then(() => {
					for (const image of images) {
						prisma.image
							.create({
								data: {
									itemId: item.itemId,
									src: image.src,
								},
							})
							.catch(() => {});
					}
				})
				.catch(() => {});
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
